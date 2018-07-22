import './App.css';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { join } from './actions/';
import MainDisplay from './components/MainDisplay';
class App extends Component {
  componentWillMount() {
    this.props.join(1);
  }

  render() {
    return (
      <div className="App">
        <MainDisplay />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ join }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
