import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import PigsContainer from "./PigsContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentHogs: hogs,
    };
  }

  filterPigs = () => {
    console.log("filtered");
    const filteredPigs = this.state.currentHogs.filter(
      (pig) => pig.greased === true
    );
    this.setState({
      currentHogs: filteredPigs,
    });
  };

  sortPigsByName = () => {
    console.log("sorted by name");
    const sortedPigs = this.state.currentHogs.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    this.setState({
      currentHogs: sortedPigs,
    });
  };

  sortPigsByWeight = () => {
    console.log("sorted by weight");
    const sortedPigs = this.state.currentHogs.sort((a, b) =>
      a.weight > b.weight ? 1 : -1
    );
    this.setState({
      currentHogs: sortedPigs,
    });
  };

  hiddenPigs = (selectedPig) => {
    const newPigsArray = this.state.currentHogs.filter(
      (pig) => pig.name !== selectedPig
    );
    debugger;
    console.log(newPigsArray);

    this.setState({
      currentHogs: newPigsArray,
    });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <button onClick={this.filterPigs}>Filter Greased Pigs</button>
        <button onClick={this.sortPigsByName}>Sort by name</button>
        <button onClick={this.sortPigsByWeight}>Sort by Weight</button>

        <br></br>
        <PigsContainer
          pigs={this.state.currentHogs}
          hiddenPigs={this.hiddenPigs}
        />
      </div>
    );
  }
}

export default App;
