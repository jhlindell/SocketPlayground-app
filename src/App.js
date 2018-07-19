import './App.css';
import logo from './logo.svg';
import React, { Component } from 'react';
import socket from './socket';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { join } from './actions/';

class App extends Component {
  componentWillMount() {
    this.props.join();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ join }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
