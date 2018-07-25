import ChatContainer from './ChatContainer';
import LoginContainer from './LogInContainer';
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
  },
  card: {
    display: 'flex',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
  },
  main: {
    height: '100vh',
  }
}

const MainDisplay = (props) => {
  const { classes } = props;
  return (
    <div className={classes.main}>
      <NavBar />
      {!props.user ? (
        <div className={classes.card}>
          <LoginContainer />
        </div>
      ) : (
      <div className={classes.container}>
        <div className={classes.firstColumn}>
          <LoginContainer />
          <RoomSelectContainer />
        </div>
        <div className={classes.secondColumn}>
          <UserListContainer />
        </div>
        <div className={classes.thirdColumn}>
          <ChatContainer />
        </div>
      </div>)}
    </div>
  )
};

export default withStyles(styles)(MainDisplay);