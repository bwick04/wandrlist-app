// Library imports
import React, { Component } from "react";
import { Panel } from "react-bootstrap";
// Component imports
// CSS imports
import "./AddDestination.css";

export default class AddDestination extends Component {
  render() {
    return (
      <div className="AddDestination container">
        <Panel eventKey="1">
          <Panel.Heading>
            <Panel.Title toggle>Add a new destination!</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            <form>
              <input type="text" name="city" placeholder="city" />
              <input type="text" name="country" placeholder="country" />
            </form>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}
