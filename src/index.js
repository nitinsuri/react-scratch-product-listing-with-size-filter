import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from './js/components/App';
import './scss/app';

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;