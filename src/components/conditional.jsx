import React, { Component } from "react";

class Conditional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        isLoggedIn: !prevState.isLoggedIn,
      };
    });
  };

  render() {
      const buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN";
      const displayText = this.state.isLoggedIn === true ? "Logged In" : "Logged out";
    return (
      <div>
            <button onClick={this.handleClick}>{buttonText}</button>
            <h2>{displayText}</h2>
      </div>
    );
  }
}

export default Conditional;
