import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { join } from './actions/';
import Login from './components/LogInContainer';
import MainDisplay from './components/MainDisplay';
import NavBar from './components/NavBar';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
    textAlign: 'center',
  }
}

class App extends Component {
  componentWillMount() {
    this.props.join(0);
  }

  render() {
    return (
      <div style={styles.container}>
        <MainDisplay user={this.props.user}/>   
      </div>
    );
  }
}

function mapStateToProps(state){
  return { user: state.userReducer }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ join }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
