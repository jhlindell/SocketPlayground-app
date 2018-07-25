import { bindActionCreators } from 'redux';
import { changeRoom, spam } from '../actions';
import { connect } from 'react-redux';
import React, {Component} from 'react';
import RoomSelectDisplay from './RoomSelectDisplay';
 
class RoomSelect extends Component{
  render(){
    return (
      <RoomSelectDisplay 
        changeRoom={ this.props.changeRoom }
        spam={ this.props.spam }
      />
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ changeRoom, spam }, dispatch);
}

export default connect(null, mapDispatchToProps)(RoomSelect);