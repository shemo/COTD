import React from "react";
import PropTypes from "prop-types";
// type to language like type script or facebook utility flow caoz of that its seperate package not built in react
const Header = props => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);
Header.propTypes ={
  tagline: PropTypes.string.isRequired
}
export default Header;
