import { connect } from 'react-redux';
import React, { Component } from 'react';
import UserListDisplay from './UserListDisplay';

class UserListContainer extends Component{
  render(){
    return (
      <UserListDisplay userList={this.props.userList}/>
    );
  }
}

function mapStateToProps(state){
  return { userList: state.userListReducer }
}

export default connect(mapStateToProps, null)(UserListContainer);