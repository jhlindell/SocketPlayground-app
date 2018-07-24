import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardContent';
import ImageIcon from '@material-ui/icons/Image';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
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
}

const UserListDisplay = (props) => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardHeader className={classes.header}>
        <Typography variant="title">
          Users
        </Typography>
      </CardHeader>
      <CardContent>
        <List>
          {props.userList && props.userList.map((user) => {
            return (
              <ListItem key={user.name}>
                <Avatar>
                  <ImageIcon />
                </Avatar>
                <ListItemText primary={user.name} secondary={user.tagline} />
                <ListItemSecondaryAction>
                  room {user.room}
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  )
};

export default withStyles(styles)(UserListDisplay);

