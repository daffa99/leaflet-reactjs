import React, { Component } from "react";
import MapContent from "../components/mapContent";
import SidebarContent from "../components/sidebarContent";
import HeaderContent from "../components/headerContent";
import DescriptionContent from "../components/descriptionContent";
// CSS file for styling
import "../styles/main.css";

class MainPage extends Component {
  // Define state
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
    // Handle Animation
    show: false,
    className: "description-content"
  };
  /**
   * Function to handle click in marker and in sidebar, it can center the map into the clicked marker and selected place in sidebar and zoom it with value 17
   *
   * @param object
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
      show: true,
      className: "description-content slide-left show"
    });
  };
  /**
   * Function to handle close popup, it can zoom out to the value of 15 and add animation Fade-out
   */
  handleClose = () => {
    this.setState({
      position: [1.28692, 103.85457],
      zoom: 15,
      show: false,
      className: "fade-out"
    });
  };
  /**
   * Function to handle end animation, so the animation can run again. It change the state of Description Component's className.
   */
  handleEndAnimation = () => {
    if (this.state.show) {
      this.setState({
        className: "description-content hold"
      });
    }
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <SidebarContent handlePlace={this.handleClick} />
          <div className="header-map-content">
            <HeaderContent handleClose={this.handleClose} />
            <DescriptionContent
              className={this.state.className}
              handleEndAnimation={this.handleEndAnimation}
              handleStartAnimation={this.handleStartAnimation}
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
