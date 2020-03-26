import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";
// Import json data
import data from "../data.json";

/**
 * SidebarContent was used as a Functional Component. This component is consist of props that has a function for selecting the places to show its description
 */
const SidebarContent = props => {
  // Map all places and its information from data (json)
  let listPlaces = data.map(item => {
    return (
      <button
        type="button"
        class="btn btn-dark"
        onClick={() => props.handlePlace(item)}
      >
        <li className="py-2">{item.place_name}</li>
      </button>
    );
  });
  return (
    <div className="sidebar-content container-fluid p-0 m-0">
      <div className="sidebar">
        <ul className="list-navigation m-auto px-0 list-unstyled">
          <Link to="/browse">
            <li className="browse nav-active text-center py-4">
              <img
                src={require("../images/browse-icon-active.png")}
                alt="browse"
              />
              <figcaption className="nav-caption">Browse</figcaption>
            </li>
          </Link>
          <Link to="/suggest-attraction">
            <li className="attraction text-center py-4">
              <img
                src={require("../images/attraction-icon.png")}
                alt="attraction"
              />
              <figcaption className="nav-caption">
                Suggest Attraction
              </figcaption>
            </li>
          </Link>
          <Link to="/videos">
            <li className="videos text-center py-4">
              <img src={require("../images/videos-icon.png")} alt="videos" />
              <figcaption className="nav-caption">Videos</figcaption>
            </li>
          </Link>
          <Link to="/blog">
            <li className="blog text-center py-4">
              <img src={require("../images/blog-icon.png")} alt="blog" />
              <figcaption className="nav-caption">Blog</figcaption>
            </li>
          </Link>
          <Link to="/about">
            <li className="about text-center py-4">
              <img src={require("../images/About-icon.png")} alt="about" />
              <figcaption className="nav-caption">About</figcaption>
            </li>
          </Link>
        </ul>
      </div>
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
    </div>
  );
};

export default SidebarContent;
