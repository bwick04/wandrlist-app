// Library imports
import React, { Component } from "react";
// Component imports
import AddDestination from "../components/AddDestination";
// CSS imports

export default class Destinations extends Component {
  render() {
    return (
      <div>
        <h1>Destinations</h1>
        <AddDestination />
      </div>
    );
  }
}
