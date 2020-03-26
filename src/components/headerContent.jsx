import React from "react";

/**
 * HeaderContent was used as a Functional Component, this component is consist of close button for closing the description component
 */
const HeaderContent = props => {
  return (
    <div className="header d-flex align-items-center justify-content-center">
      <div className="row w-100">
        <div className="col-md-9">
          <h6 className="header-string mx-4 py-2">
            TOP-RATED TOURIST ATTRACTIONS IN SINGAPORE
          </h6>
        </div>
        <div className="col-md-3 config text-right">
          <button class="btn p-1">
            <img src={require("../images/setting-icon.png")} alt="setting" />
          </button>
          <button class="btn p-1">
            <img src={require("../images/quest-icon.png")} alt="quest" />
          </button>
          <button class="btn p-1" onClick={props.handleClose}>
            <img src={require("../images/close-icon.png")} alt="close" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
