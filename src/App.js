import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import HomePage from "./components/pages/homepage/homepage";

const HatsPage = () => {
  return (
    <div>
      <h1> HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop/hats" component={HatsPage} />
    </div>
  );
}

export default App;
