import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import red from '@material-ui/core/colors/red';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    margin: '20px',
  },
  button: {
    marginTop: '15px'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  avatar: {
    marginRight: '40px',
    color: '#fff',
    backgroundColor: red[500],
  },
  nameLine: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '15px'
  }
};

const UserDisplay = (props) => {
  const letter = props.user.name[0];
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <div className={classes.nameLine}>
          <Avatar className={classes.avatar}>{letter}</Avatar>
          <Typography variant="display1">
            {props.user.name}
          </Typography> 
        </div>
        <Typography variant="body2"> 
          {props.user.tagline}
        </Typography>
        <CardActions>
          <Button variant="contained" 
            type="submit" 
            color="primary" 
            className={classes.button}
            onClick={() => props.logout()}
          >
            Logout
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(UserDisplay);