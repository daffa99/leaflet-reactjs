import React, { Component } from "react";

class DescriptionContent extends Component {
  render() {
    return (
      <div
        className={
          this.props.showState
            ? "description-content slide-left show"
            : "description-content"
        }
      >
        <div className="place-pict">
          <img
            className="img-fluid"
            src={this.props.imageUrl}
            alt={this.props.placeName}
          />
        </div>
        <div className="place-title">
          <h6 className="py-2 px-4">{this.props.placeName}</h6>
        </div>
        <div className="place-description">
          <p className="short-description pt-1 px-4">
            {this.props.shortDescription}
          </p>
          <p className="long-description px-4">{this.props.longDescription}</p>
        </div>
        <div className="place-information px-4">
          <span>{this.props.address}</span>
          <br />
          <span>{this.props.website}</span>
        </div>
      </div>
    );
  }
}

export default DescriptionContent;
