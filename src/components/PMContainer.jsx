import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sendPrivateMessage, closePrivateMessage } from '../actions/';
import PMDisplay from './PMDisplay';

class PMContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      message: ''
    }
  }

  handleInputChange = name => event => {
    this.setState({[name]: event.target.value});
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.sendPrivateMessage(this.props.privateMessage.username, this.state.message);
    this.setState({ message: ''});
  }

  closeDialog = () => {
    this.setState({ message: ''});
    this.props.closePrivateMessage();
  }

  render(){
    return (
      <PMDisplay 
        privateMessage={this.props.privateMessage}
        closeDialog={this.closeDialog}
        message={this.state.message}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
      />
    );
  }
}

function mapStateToProps(state){
  return { privateMessage: state.privateMessageReducer }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ sendPrivateMessage, closePrivateMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PMContainer);
