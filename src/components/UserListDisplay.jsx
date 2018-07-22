import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardContent';
import ImageIcon from '@material-ui/icons/Image';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '../../node_modules/@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';


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
          <ListItem>
            <Avatar>
              <ImageIcon />
            </Avatar>
            <ListItemText primary="Jeph" secondary="Knows what's up" />
          </ListItem>
          <ListItem>
            <Avatar>
              <WorkIcon />
            </Avatar>
            <ListItemText primary="Betty" secondary="Betty is sweaty" />
          </ListItem>
          <ListItem>
            <Avatar>
              <WorkIcon />
            </Avatar>
            <ListItemText primary="Bob" secondary="Just plain Bob" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  )
};

export default withStyles(styles)(UserListDisplay);

