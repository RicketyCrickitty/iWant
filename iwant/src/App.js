import React, { Component } from "react";
import Header from "./components/Header";
import ListBody from "./components/ListsBody";

class App extends Component {
  render () {
    return (
      <div className="container">
        <Header user="James"></Header>
        <ListBody user="James"></ListBody>
      </div>
    );
  }
}

export default App;
