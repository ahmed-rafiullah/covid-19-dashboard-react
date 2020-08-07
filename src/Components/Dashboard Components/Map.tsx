import React from "react";
import mapboxgl from "mapbox-gl";
import { AllCountriesDataInterface } from "../../DataInterfaces/allCountriesDataInterface";

interface MapProps {
  lng?: number;
  lat?: number;
  allCoutries: AllCountriesDataInterface | null | undefined;
}

export default class Map extends React.PureComponent<MapProps> {
  mapContainer: any = "";
  map: mapboxgl.Map | null | undefined = null;

  componentDidMount() {
    console.log("hmm");
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/khattakahmed/ckai0622g0ggc1io16p7dggg4",
      center: [this.props.lng ?? 0, this.props.lat ?? 0],
      zoom: 3,
    });

    //https://dev.to/alemesa/how-to-create-a-covid-19-map-with-mapbox-and-react-3jgf#add_data
    this.map.once("load", () => {
      // Add our SOURCE
      // with id "points"
      this.map?.addSource("points", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: this.mapDataToGeoJSON(this.props.allCoutries),
        },
      });

      //https://dev.to/alemesa/how-to-create-a-covid-19-map-with-mapbox-and-react-3jgf#add_data
      //https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#interpolate
      //https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#get
      //https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#zoom
      //https://docs.mapbox.com/help/tutorials/mapbox-gl-js-expressions/
      this.map?.addLayer({
        id: "circles",
        source: "points", // this should be the id of the source
        type: "circle",
        // paint properties
        paint: {
          "circle-opacity": 0.75,
          "circle-stroke-width": 0.1,
          "circle-radius": [
            "interpolate",
            ["linear"],
            ["get", "cases"],
            1,
            4,
            1000,
            8,
            4000,
            10,
            8000,
            14,
            12000,
            18,
            100000,
            40,
          ],
          "circle-color": [
            "interpolate",
            ["linear"],
            ["get", "cases"],
            1,
            "#ffffb2",
            5000,
            "#fed976",
            10000,
            "#feb24c",
            25000,
            "#fd8d3c",
            50000,
            "#fc4e2a",
            75000,
            "#e31a1c",
            100000,
            "#b10026",
          ],
        },
      });

      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
      });

      // Variable to hold the active country/province on hover
      let lastId;

      this.map?.on("mousemove", "circles", (e) => {
        // Get the id from the properties

        //@ts-ignore
        console.log(e.features[0].geometry);

        //TODO: Fix this
        // @ts-ignore
        const f = e.features[0];

        if (!f) {
          return;
        }

        const id = f.properties?.id;

        if (!id) {
          return;
        }

        if (id !== lastId) {
          lastId = id;
          // @ts-ignore
          this.map.getCanvas().style.cursor = "pointer";
          // @ts-ignore
          const { cases, country, deaths, recoveries } = f.properties;

          // @ts-ignore
          const coordinates = e.features[0].geometry.coordinates.slice();

          const HTML = `
          <div class='popup'>
            <p>Country: <b>${country.toLocaleString()}</b></p>
            <p>Cases: <b>${cases.toLocaleString()}</b></p>
            <p>Deaths: <b>${deaths.toLocaleString()}</b></p>
            <p>Recoveries: <b>${recoveries.toLocaleString()}</b></p>
          </div>
          `;

          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          // while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          //   coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          // }

          popup
            .setLngLat(coordinates)
            .setHTML(HTML)
            //@ts-ignore
            .addTo(this.map);

          console.log(cases);
          // const coordinates = e.features[0].geometry.coordinates.slice();
        }
      });

      // Mouse leave event
      this.map?.on("mouseleave", "circles", () => {
        // Reset the last Id
        lastId = undefined;
        // @ts-ignore
        this.map.getCanvas().style.cursor = "";
        popup.remove()
      });
    });

    // Add zoom and rotation controls to the map.
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.addControl(new mapboxgl.FullscreenControl());
    // this.map.scrollZoom.disable();
  }

  private mapDataToGeoJSON(
    allCountries: AllCountriesDataInterface | undefined | null
  ): any {
    return allCountries?.data.map((x) => {
      return {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [x.countryInfo.long, x.countryInfo.lat],
        },
        properties: {
          id: '' + x.countryInfo._id + x.countryInfo.iso2 + x.countryInfo.iso3, // unique identifier in this case the index
          country: x.country,
          cases: x.cases,
          deaths: x.deaths,
          recoveries: x.recovered,
        },
      };
    });
  }

  render() {
    this.map?.flyTo({
      center: [this.props.lng ?? 0, this.props.lat ?? 0],
      essential: true,
      zoom: 5,
    });

    return (
      <>
        <div className="map_content" ref={(el) => (this.mapContainer = el)} />
      </>
    );
  }
}
