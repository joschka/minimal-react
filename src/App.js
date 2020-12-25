import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";

import Welcome from './Welcome.js';

function App() {
  const foo = "Santa";

  return (
    <div className="app">
      <Welcome name={foo} />
      <p>What's 2 * 2? -> {2*2}</p>
    </div>
  );
}

export default hot(module)(App);
