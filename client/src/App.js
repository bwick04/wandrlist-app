// Library imports
import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
// Component imports
import Routes from "./Routes";
// CSS imports
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">WandrList</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem>
              <Link to="/destinations">Destinations</Link>
            </NavItem>
          </Nav>
        </Navbar>
        {/* The content */}
        <Routes />
      </div>
    );
  }
}

export default App;
