import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardContent';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '../../node_modules/@material-ui/core';

const styles = {
  card: {
    margin: '20px',
    height: '600px',
  },
  header: {
    backgroundColor: 'lightgray',
  },
  button: {
    marginLeft: '15px'
  },
  footer: {
    // position: 'fixed',
    // bottom: 0,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: '85%',
  },
  textField: {
    marginRight: '15px',
    width: '75%',
  },
  list: {
    flex: 1,
    overflowY: 'auto',
  }
}

const ChatDisplay = (props) => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardHeader className={classes.header}>
        <Typography variant="title">
          {props.user ? "Room " + props.user.room : "No Room Selected"}
        </Typography>
      </CardHeader>
      <CardContent className={classes.content}>
        <List className={classes.list}>
          {props.messageList && props.messageList.map((message) => {
            return (
              <ListItem key={message.timeStamp}>
                <Avatar>
                  {message.username[0]}
                </Avatar>
                <ListItemText primary={message.username} secondary={message.message} />
              </ListItem>
            )
          })}
        </List>
        <form 
          autoComplete="off"
          onSubmit={props.handleFormSubmit}
        >
          <TextField
            id="message"
            label="Message"
            className={classes.textField}
            value={props.message}
            onChange={ props.handleInputChange('message') }
            margin="normal"

          />
          <Button variant="contained" 
            type="submit" 
            color="primary" 
          >
            Submit
          </Button>
        </form>
      </CardContent> 
    </Card>
  );
};

export default withStyles(styles)(ChatDisplay);