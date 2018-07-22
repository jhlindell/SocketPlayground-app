import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ChatDisplay from './ChatDisplay';
import React, { Component } from 'react';

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
    console.log(this.state.message);
  }

  render(){
    return (
      <div>
        <ChatDisplay 
          message={this.state.message}
          handleInputChange={ this.handleInputChange }
          handleFormSubmit={ this.handleFormSubmit }
        />
      </div>
    );
  }
}

export default connect()(ChatContainer);