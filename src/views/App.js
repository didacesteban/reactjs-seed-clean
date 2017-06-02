import React, { Component } from 'react';
import './css/App.css';
const List = require('./list');

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      items: []
    };
  }
  loadView () {
    this.eventHandler.viewWillAppear();
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Items List</h2>
        </div>
        <div className="list-content">
          <List items={this.state.items}/>
        </div>
      </div>
    );
  }
  showItems (items) {
    this.setState({items:items})
  }
}

module.exports = App;
