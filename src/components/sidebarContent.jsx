import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const SidebarContent = () => {
  return (
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
            <figcaption className="nav-caption">Suggest Attraction</figcaption>
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
  );
};

export default SidebarContent;
