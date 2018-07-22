import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginInDisplay from './LogInDisplay';
import { login } from '../actions';


class LogInContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      tagline: '',
    }
  }

  handleInputChange = name => event => {
    this.setState({[name]: event.target.value});
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state.name, this.state.tagline)
  }

  render(){
    return (
      <div>
        <LoginInDisplay 
          handleInputChange={ this.handleInputChange }
          handleFormSubmit={ this.handleFormSubmit }
          name={ this.state.name }
          tagline={ this.state.tagline }
          { ...this.props }
        />
      </div>
    );
  }
}

function mapStateToProps(state){
  return { user: state.userReducer }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ login }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInContainer);


