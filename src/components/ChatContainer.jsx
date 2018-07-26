import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ChatDisplay from './ChatDisplay';
import React, { Component } from 'react';
import { postMessage } from '../actions';

class ChatContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: '',
    }
  }

  handleInputChange = name => event => {
    this.setState({[name]: event.target.value});
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.postMessage(this.state.message);
    this.setState({ message: '' });
  }

  render(){
    return (
      <div>
        <ChatDisplay 
          message={ this.state.message }
          handleInputChange={ this.handleInputChange }
          handleFormSubmit={ this.handleFormSubmit }
          messageList={ this.props.messageList }
          user= { this.props.user }
        />
      </div>
    );
  }
}

function mapStateToProps(state){
  return { messageList: state.messageReducer, user: state.userReducer };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ postMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);