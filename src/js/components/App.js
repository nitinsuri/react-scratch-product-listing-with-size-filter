import React, { Component } from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./HelloWorld";
import HelloWorldSecond from "./HelloWorldSecond";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <HelloWorld />
                <HelloWorldSecond />
            </React.Fragment>
        );
    }
}

export default App;