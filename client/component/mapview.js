import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import mapURL from '../../config/component/config';

const MapView = (props) => {
  const handleClick = (thing) => {
    props.onMapClick(thing);
  };
  const markers = props.events.map((event) => {
    let latlng = [event.lat, event.lng];
    return (
      <Marker key = {event.id} position={latlng}>
        <Popup>
          <span> {event.event} </span>
        </Popup>
      </Marker>
    );
  });
  const position = [37.77, -122.431297];
  return (
    <Map onclick={handleClick} center={position} zoom={10} className="col-sm-8 MapView">
      <TileLayer
        url= {mapURL}
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> &copy; <a href="https://www.mapbox.com/map-feedback/">Mapbox</a>'
      />
      {markers}
    </Map>
  );
};

export default MapView;
// render(map, document.getElementById('map-container'));

//      <Marker position={position}>
//        <Popup>
//           <span> A pretty CSS3 popup.<br />Easily customizable. </span>
//         </Popup>
//       </Marker>

