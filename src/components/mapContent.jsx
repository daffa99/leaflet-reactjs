import React, { Component } from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Tooltip } from "react-leaflet";
import data from "../data.json";
import logo from "../images/new-pin.png";
import "../styles/map.css";

// Add a custom icon into leaflet marker and adjust the tooltip so it resemble the custom icon
let myIcon = L.icon({
  iconUrl: logo,
  iconSize: [30, 45],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
  tooltipAnchor: [-9, -26]
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
          className="marker-custom"
        >
          <Tooltip permanent opacity="1" className="tooltip-custom">
            <span className="tooltip-span">{item.place_name}</span>
          </Tooltip>
        </Marker>
      );
    });
    // The code below was initially copy-pasted from react-leaflet example here: https://github.com/PaulLeCam/react-leaflet/blob/master/example/components/simple.js Then, I did some change to adjust to the case given
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
