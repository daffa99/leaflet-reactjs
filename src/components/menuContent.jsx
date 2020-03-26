import React from "react";
import "../styles/sidebar.css";
// Import json data
import data from "../data.json";

/**
 * MenuContent was used as a Functional Component. This component is consist of props that has a function for selecting the places to show its description
 */
const MenuContent = props => {
  // Map all places and its information from data (json)
  let listPlaces = data.map(item => {
    return (
      <button
        type="button"
        className={
          props.clickedPlace === item.place_name
            ? "btn btn-dark clicked"
            : "btn btn-dark"
        }
        onClick={() => props.handlePlace(item)}
      >
        <li className="py-2">{item.place_name}</li>
      </button>
    );
  });
  return (
    <React.Fragment>
      <div className="sidebar-menu px-4">
        <div className="dropdown-filter-header py-5">
          <select id="filter-by">
            <option value="favorite">filter by favorite</option>
            <option value="none">filter by none</option>
          </select>
        </div>
        <ul className="list-place list-unstyled font-weight-bold">
          {listPlaces}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default MenuContent;
