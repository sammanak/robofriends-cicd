import React, { Component } from "react";
import CounterButton from "./CounterButton";
import CounterButton2 from "./CounterButton2";

class Header extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <h1 className="f2">RoboFriends</h1>
        <CounterButton color={"red"} />
        &nbsp;
        <CounterButton2 color={"blue"} />
      </div>
    );
  }
}

export default Header;
