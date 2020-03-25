import React, { Component } from "react";
import MapContent from "../components/mapContent";
import SidebarContent from "../components/sidebarContent";
import "../styles/main.css";
import HeaderContent from "../components/headerContent";
import DescriptionContent from "../components/descriptionContent";

class MainPage extends Component {
  state = {
    // Map related
    position: [1.28692, 103.85457],
    zoom: 15,
    // Description related
    imageUrl: "",
    placeName: "",
    shortDescription: "",
    longDescription: "",
    address: "",
    website: "",
    show: false,
    className: "description-content"
  };
  /**
   * Function to handle click in marker, it can center the map into the clicked marker and zoom it with value 17
   */
  handleClick = item => {
    console.log(item);
    let position = [item.latitude, item.longitude];
    this.setState({
      position: position,
      zoom: 17,
      imageUrl: item.picture_url,
      placeName: item.place_name,
      shortDescription: item.short_description,
      longDescription: item.long_description,
      address: item.address,
      website: item.website,
      show: true
    });
  };
  /**
   * Function to handle close popup, it can zoom out to the value of 15
   */
  handleClose = () => {
    this.setState({
      position: [1.28692, 103.85457],
      zoom: 15,
      show: false
    });
  };
  /**
   * Function to handle clicked place in sidebar, it will center the map on the clicked place
   */
  handlePlace = item => {
    let position = [item.latitude, item.longitude];
    this.setState({
      position: position,
      zoom: 17,
      imageUrl: item.picture_url,
      placeName: item.place_name,
      shortDescription: item.short_description,
      longDescription: item.long_description,
      address: item.address,
      website: item.website,
      show: true
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <SidebarContent handlePlace={this.handlePlace} />
          <div className="header-map-content">
            <HeaderContent handleClose={this.handleClose} />
            <DescriptionContent
              imageUrl={this.state.imageUrl}
              placeName={this.state.placeName}
              shortDescription={this.state.shortDescription}
              longDescription={this.state.longDescription}
              address={this.state.address}
              website={this.state.website}
              showState={this.state.show}
            />
            <MapContent
              position={this.state.position}
              zoom={this.state.zoom}
              handleClick={this.handleClick}
              handleClose={this.handleClose}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default MainPage;
