import React, { Component } from 'react';
import './css/App.css';

module.exports = class List extends Component
{
  propTypes: {
    items: React.PropTypes.array
  }
  render () {
    var _createItem = function(item, index) {
      return (
        <div key={index}>
          <b><p>Item: {item.name}</p></b>
          <p><u>Description</u>: {item.description}</p>
        </div>
      );
    };
    return (
      <ul>
        {this.props.items.map(_createItem)}
      </ul>
    );
  }
}
