import { bindActionCreators } from 'redux';
import { changeRoom } from '../actions';
import { connect } from 'react-redux';
import React, {Component} from 'react';
import RoomSelectDisplay from './RoomSelectDisplay';
 
class RoomSelect extends Component{
  render(){
    return (
      <RoomSelectDisplay 
        changeRoom={this.props.changeRoom}
      />
    );
  }
}

function mapStateToProps(state){
  return { };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ changeRoom }, dispatch);
}

export default connect(null, mapDispatchToProps)(RoomSelect);