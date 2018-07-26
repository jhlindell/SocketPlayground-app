import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUpPrivateMessage } from '../actions';
import React, { Component } from 'react';
import UserListDisplay from './UserListDisplay';

class UserListContainer extends Component{
  render(){
    return (
      <UserListDisplay 
        user={this.props.user}
        userList={this.props.userList}
        setUpPrivateMessage={this.props.setUpPrivateMessage}
      />
    );
  }
}

function mapStateToProps(state){
  return { userList: state.userListReducer, user: state.userReducer }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ setUpPrivateMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);