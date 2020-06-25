import React, { Component } from "react";

export default class HogInfo extends React.Component {
  renderInfo = () => {
    console.log("hog has been clicked");
    this.props.cardClick ? (
      <div>
        Specialty: {this.props.pig.specialty}
        Weight: {this.props.pig.weight}
        Highest Medal Achieved:
        {this.props.pig["highest medal achieved"]}
      </div>
    ) : null;
  };
  render() {
    return <div id="hog-info">{this.renderInfo()}</div>;
  }
}
