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
    if (item.extra_places.length > 0) {
      let extraPlaces = item.extra_places.map(place => {
        return <li className="py-1 pl-4">{place}</li>;
      });
      return (
        <React.Fragment>
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
          <a href={`#${item.id}`} data-toggle="collapse">
            <i class="fa fa-fw fa-sort-down"></i>
          </a>
          <div className="collapse" id={item.id}>
            <ul className="extra-places list-unstyled">{extraPlaces}</ul>
          </div>
        </React.Fragment>
      );
    }
    return (
      <a
        href={`#${item.id}`}
        className={
          props.clickedPlace === item.place_name
            ? "btn btn-dark no-extra clicked"
            : "btn btn-dark no-extra"
        }
        onClick={() => props.handlePlace(item)}
      >
        <li className="py-2">{item.place_name}</li>
      </a>
    );
  });
  return (
    <React.Fragment>
      <div className="sidebar-menu pl-4 pr-2">
        <div className="dropdown-filter-header px-2 py-4">
          <select id="filter-by">
            <option value="favorite">Filter by favorite</option>
            <option value="none">Filter by none</option>
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
