import React from "react";
import mapboxgl from "mapbox-gl";

interface MapState {
  lng: number;
  lat: number;
  zoom: number;
}


interface MapProps {
  lng?: number;
  lat?: number;
}



export default class Map extends React.Component<MapProps, MapState> {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2,
    };
  }

  mapContainer:any = "";

  componentDidMount() {
    console.log('hmm')
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    // Add zoom and rotation controls to the map.
        map.addControl(new mapboxgl.NavigationControl()); 
        map.addControl(new mapboxgl.FullscreenControl());  
        map.scrollZoom.disable();    

       
  }

  render() {
   
    return (
      <>
        <div className='map_content' ref={(el) => (this.mapContainer = el)} />
      </>
    );
  }
}
