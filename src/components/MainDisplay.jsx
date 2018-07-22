import React from 'react';
import NavBar from './NavBar';
import Login from './LogInContainer';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '30% 30% 40%',
  },

  firstColumn: {
    gridColumnStart: '1',
    gridColumnEnd: '2',
  },

  secondColumn: {
    gridColumnStart: '2',
    gridColumnEnd: '3',
  },
}

const MainDisplay = (props) => {
  const { classes } = props;
  return (
    <div>
      <NavBar />
        <div className={classes.container}>
          <div className={classes.firstColumn}>
            <Login />
          </div>
        </div>
    </div>
  )
};

export default withStyles(styles)(MainDisplay);