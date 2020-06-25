import React, { Component } from "react";
import HogCard from "./HogCard";

export default class PigsContainer extends React.Component {
  render() {
    return (
      <div id="pigs-container" className="ui grid container">
        {this.props.pigs.map((p) => (
          <HogCard pig={p} hiddenPigs={this.props.hiddenPigs} />
        ))}
      </div>
    );
  }
}
