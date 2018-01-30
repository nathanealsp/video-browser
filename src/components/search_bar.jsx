import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// THE SEARCH BAR COMPONENT
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
    // This binding is necessary to make `this` work in the callback
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // EVENT HANDLERS
  // METHOD HANDLING THE CHANGE...
  handleInputChange(e) {
    // e.preventDefault();
    this.setState({ term: e.target.value });
  }

  // RENDERING JSX..
  render() {
    return (
      <div className="search-bar">
        {/* <input onChange={event => this.setState({ term: event.target.value })} />Plan B */}
        <input value={this.state.term} onChange={this.handleInputChange} />
        Value of input: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
