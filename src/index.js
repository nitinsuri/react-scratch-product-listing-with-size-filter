import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from "./js/components/HelloWorld";

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<HelloWorld />, wrapper) : false;