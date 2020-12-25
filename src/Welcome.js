import React from "react";
import { hot } from "react-hot-loader";
import "./Welcome.css";

const Welcome = ({ name }) => <h1>Hello, {name}!</h1>;

export default hot(module)(Welcome);
