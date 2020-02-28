import React, { Component } from "react";
import ProductListing from "./components/ProductListing/ProductListing";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <main id="app-wrapper">
                    <nav><h2>Women's tops</h2></nav>
                    <ProductListing />
                </main>
            </React.Fragment>
        )
    }
}

export default App;