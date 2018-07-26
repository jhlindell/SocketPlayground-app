import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import CommentIcon from '@material-ui/icons/Comment';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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
            const chipLabel = `room ${user.room}`
            return (
              <ListItem key={user.name}>
                <ListItemText primary={user.name} secondary={user.tagline} />
                <ListItemSecondaryAction>
                  {props.user.name !== user.name && <IconButton 
                    onClick={()=> props.setUpPrivateMessage(user.name)}
                  >
                    <CommentIcon />
                  </IconButton>}
                  <Slide direction='left' in={true} mountOnEnter unmountOnExit>
                    <Chip label={chipLabel} />
                  </Slide>
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

