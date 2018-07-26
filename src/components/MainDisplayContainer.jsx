import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { join } from '../actions/';
import MainDisplay from './MainDisplay';

class MainDisplayContainer extends Component{
  componentDidMount(){
    this.props.join(0);
  }

  render(){
    return (
      <MainDisplay 
        user={this.props.user}
      /> 
    );
  }
}

function mapStateToProps(state){
  return { user: state.userReducer }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ join }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainDisplayContainer);