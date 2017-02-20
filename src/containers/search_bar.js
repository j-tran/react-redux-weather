import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(event) {
    this.setState(term: event.targe.value);
  }

  render() {
    return (
      <form className="input-group">
        <input
          placeholder="Get a 5-day forecast"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="button">Search</button>
        </span>
      </form>
    );
  }
}
