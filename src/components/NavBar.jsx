import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const NavBar = (props) => {
  const { classes } = props;
  return(
      <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                  Socket.io Chatroom
                </Typography>
            </Toolbar>
        </AppBar>
      </div>
  )
}

export default withStyles(styles)(NavBar);