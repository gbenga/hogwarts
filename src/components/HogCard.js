import React from "react";
import HogInfo from "./HogInfo";

export default class HogCard extends React.Component {
  constructor() {
    super();
    this.state = {
      hasBeenClicked: null,
    };
  }

  handleClick = () => {
    this.setState({
      hasBeenClicked: true,
    });
  };

  hidePig = (event) => {
    //find the pig in question & pass that to below fn
    this.props.hiddenPigs(event.target.name);
    // console.log(this.props);
  };
  render() {
    let pigImage = require(`../hog-imgs/${this.props.pig.name
      .toLowerCase()
      .replace(" ", "_")
      .replace(" ", "_")}.jpg`);

    return (
      <div className="ui eight wide column" onClick={this.handleClick}>
        <img src={pigImage} />
        Name: {this.props.pig.name}
        <button
          name={this.props.pig.name}
          onClick={(event) => this.hidePig(event)}
        >
          Hide Pig
        </button>
        {/* <HogInfo cardClick={this.state.hasBeenClicked} pig={this.props.pig} /> */}
        <div>
          {this.state.hasBeenClicked
            ? `${this.props.pig.specialty}
            ${this.props.pig.weight}
            ${this.props.pig["highest medal achieved"]}`
            : null}
        </div>
      </div>
    );
  }
}
