import React from "react";

/**
 * Description Content as a Functional Component
 */
const DescriptionContent = props => {
  return (
    <div className={props.className} onAnimationEnd={props.handleEndAnimation}>
      <div className="place-pict">
        <img className="img-fluid" src={props.imageUrl} alt={props.placeName} />
      </div>
      <div className="place-title">
        <h6 className="py-2 px-4">{props.placeName}</h6>
      </div>
      <div className="place-description-all">
        <div className="place-description">
          <p className="short-description pt-1 px-4">
            {props.shortDescription}
          </p>
          <p className="long-description px-4">{props.longDescription}</p>
        </div>
        <div className="place-information px-4">
          <span>
            <i className="fa fa-fw fa-map-marker location-colored"></i>
            {props.address}
          </span>
          <br />
          <span>
            <i className="fa fa-fw fa-globe web-colored"></i>
            {props.website}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DescriptionContent;
