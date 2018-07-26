import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardContent';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    margin: '20px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'lightgray',
  },
  button: {
    margin: '10px',
  },
  hr: {
    width: '100%',
    marginTop: '5px',
    marginBottom: '10px'
  },
  text: {
    marginTop: '5px',
    marginBottom: '5px'
  }
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
      <CardContent className={classes.content}>
        <div className={classes.text}>
          Room Selection:
        </div>
        <Button 
          className={classes.button}
          variant="outlined" 
          onClick={() => props.changeRoom(1)}
          color="primary"
        >
          Room 1
        </Button>
        <Button 
          className={classes.button}
          variant="outlined" 
          onClick={() => props.changeRoom(2)}
          color="primary"
        >
          Room 2
        </Button>
        <Button 
          className={classes.button}
          variant="outlined" 
          onClick={() => props.changeRoom(3)}
          color="primary"
        >
          Room 3
        </Button>
        <hr className={classes.hr}/>
        <div className={classes.text}>
          Don't press this button:
        </div>
        <Button 
          className={classes.button}
          variant="outlined" 
          onClick={() => props.spam()}
          color="secondary"
        >
          Spam
        </Button>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(RoomSelectDisplay);