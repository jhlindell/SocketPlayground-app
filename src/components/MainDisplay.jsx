import ChatContainer from './ChatContainer';
import Login from './LogInContainer';
import NavBar from './NavBar';
import React from 'react';
import RoomSelectContainer from './RoomSelectContainer';
import UserListContainer from './UserListContainer';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '25% 30% 45%',
  },

  firstColumn: {
    gridColumnStart: '1',
    gridColumnEnd: '2',
  },

  secondColumn: {
    gridColumnStart: '2',
    gridColumnEnd: '3',
  },

  thirdColumn: {
    gridColumnStart: '3',
    gridColumnEnd: '4',
  }
}

const MainDisplay = (props) => {
  const { classes } = props;
  return (
    <div>
      <NavBar />
        <div className={classes.container}>
          <div className={classes.firstColumn}>
            <Login />
            <RoomSelectContainer />
          </div>
          <div className={classes.secondColumn}>
            <UserListContainer />
          </div>
          <div className={classes.thirdColumn}>
            <ChatContainer />
          </div>
        </div>
    </div>
  )
};

export default withStyles(styles)(MainDisplay);