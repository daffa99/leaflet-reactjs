import React, { Component } from "react";
import L from "leaflet";
import { Map, TileLayer, Marker } from "react-leaflet";
import data from "../data.json";
import logo from "../images/pin.png";
import "../styles/map.css";

// Add icon into leaflet marker
let myIcon = L.icon({
  iconUrl: logo,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

/**
 * Map Component that consist of Map and Header, it return map component with props (place data)
 */
class MapContent extends Component {
  render() {
    // Add marker to each place in map
    let markingPlace = data.map(item => {
      return (
        <Marker
          position={[item.latitude, item.longitude]}
          icon={myIcon}
          onClick={() => this.props.handleClick(item)}
        ></Marker>
      );
    });
    return (
      <div className="map-content">
        <Map
          className="map"
          center={this.props.position}
          zoom={this.props.zoom}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markingPlace}
        </Map>
      </div>
    );
  }
}
export default MapContent;
