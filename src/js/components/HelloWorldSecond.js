import React, { Component } from "react";
import ReactDOM from "react-dom";

class HelloWorldSecond extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
        <React.Fragment>
            <h1>Hello! World.</h1>
      </React.Fragment>
    );
  }
}

export default HelloWorldSecond;