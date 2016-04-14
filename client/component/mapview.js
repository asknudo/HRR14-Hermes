import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import mapURL from '../../config/component/config.js';

const MapView = (props) => {
  const handleClick = (thing) => {
    console.log(thing);
  };
  const position = [37.77, -122.431297];
  return (
    <Map onclick={handleClick} center={position} zoom={13} className="col-sm-8 MapView">
      <TileLayer
        url= {mapURL}
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> &copy; <a href="https://www.mapbox.com/map-feedback/">Mapbox</a>'
      />
      <Marker position={position}>
        <Popup>
          <span> A pretty CSS3 popup.<br />Easily customizable. </span>
        </Popup>
      </Marker>
    </Map>
  );
};

export default MapView;
// render(map, document.getElementById('map-container'));
