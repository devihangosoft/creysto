import React, { Component } from "react";
import "react-bootstrap";
import Logo from "../images/logo.png";
import avatar from "../images/avatar.png";
import { Dropdown } from "react-bootstrap";

class TopWrap extends React.Component {
  render() {
    return (
      <div class="container-fluid headerWrap">
        <div class="row">
          <div class="col-12 col-sm-4 col-md-2 col-lg-2 col-xl-2 text-center text-sm-left ">
            <div class="row">
              <img src={Logo} class="logo" />
            </div>
          </div>
          <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4 topRight text-right">
            <Dropdown>
              <Dropdown.Toggle variant="username" id="dropdown-basic">
                <img src={avatar} class="avatar" />{" "}
                <span class="avatar_text">UserName</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }
}

export default TopWrap;
