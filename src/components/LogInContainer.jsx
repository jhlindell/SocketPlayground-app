import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginInDisplay from './LogInDisplay';
import { login, logout } from '../actions';
import React, { Component } from 'react';
import LoginUserDisplay from './LoginUserDisplay';


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
        {!this.props.user ? 
          (<LoginInDisplay 
            handleInputChange={ this.handleInputChange }
            handleFormSubmit={ this.handleFormSubmit }
            name={ this.state.name }
            tagline={ this.state.tagline }
            { ...this.props }
          />) :
          (<LoginUserDisplay
            logout={ this.props.logout }
            user={ this.props.user }
            { ...this.props }
          />)}
      </div>
    );
  }
}

function mapStateToProps(state){
  return { user: state.userReducer }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ login, logout }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInContainer);


