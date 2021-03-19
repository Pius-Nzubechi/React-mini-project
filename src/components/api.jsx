import React, { Component } from "react";

class Api extends Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleChange = (e) => { 
    const {name, value} = e.target
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <h2>{this.state.firstName} {this.state.lastName}</h2>
      </form>
    );
  }
}

export default Api;
