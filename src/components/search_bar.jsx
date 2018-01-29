import React, { Component } from "react";
import ReactDOM from "react-dom";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleInputChange} />
      </div>
    );
  }
  //Method handling the change in the input.
  handleInputChange(e) {
    // e.preventDefault();
    console.log(e.target.value);
  }
}
export default SearchBar;
