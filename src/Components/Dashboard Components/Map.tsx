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
            1,4,
            1000,8,
            4000,10,
            8000,14,
            12000,18,
            100000, 40,
          ],
          "circle-color":  [
                 "interpolate",
                 ["linear"],
                 ["get", "cases"],
                 1, '#ffffb2',
                 5000, '#fed976',
                 10000, '#feb24c',
                 25000, '#fd8d3c',
                 50000, '#fc4e2a',
                 75000, '#e31a1c',
                 100000, '#b10026'
               ]
        },
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
          coordinates: [x.coordinates.longitude, x.coordinates.latitude],
        },
        properties: {
          id: x.code, // unique identifier in this case the index
          country: x.name,
          cases: x.latest_data.confirmed,
          deaths: x.latest_data.deaths,
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
