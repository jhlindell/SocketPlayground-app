import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import UserListDisplay from './UserListDisplay';

class UserListContainer extends Component{
  render(){
    return (
      <UserListDisplay />
    );
  }
}

function mapStateToProps(state){
  return { chatMessages: state.chatMessageReducer }
}

export default connect(mapStateToProps, null)(UserListContainer);