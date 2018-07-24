import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardContent';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '../../node_modules/@material-ui/core';

const styles = {
  card: {
    margin: '20px',
  },
  header: {
    backgroundColor: 'lightgray',
  },
};

const RoomSelectDisplay = (props) => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardHeader className={classes.header}>
        <Typography variant="title">
          Select Room
        </Typography>
      </CardHeader>
      <CardContent>
        <Button 
          variant="contained" 
          onClick={() => props.changeRoom(1)}
          color="primary"
        >
          Room 1
        </Button>
        <Button 
          variant="contained" 
          onClick={() => props.changeRoom(2)}
          color="primary"
        >
          Room 2
        </Button>
        <Button 
          variant="contained" 
          onClick={() => props.changeRoom(3)}
          color="primary"
        >
          Room 3
        </Button>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(RoomSelectDisplay);