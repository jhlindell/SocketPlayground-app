import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardContent';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    margin: '20px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '0'
  },
  content: {
    paddingTop: '0',
  },
  header: {
    backgroundColor: 'lightgray',
  },
  button: {
    marginTop: '15px'
  }
}

const LogInDisplay = (props) => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardHeader className={classes.header}>
        <Typography variant="title">
          LogIn
        </Typography>
      </CardHeader>
      <CardContent className={classes.content}>
        <form className={classes.container} 
          autoComplete="off"
          onSubmit={props.handleFormSubmit}>
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            value={props.name}
            onChange={ props.handleInputChange('name') }
            margin="normal"
          />
          <TextField
            id="tagline"
            label="Tagline"
            className={classes.textField}
            value={props.tagline}
            onChange={ props.handleInputChange('tagline') }
            margin="normal"
          />
          <CardActions>
            <Button variant="contained" 
              type="submit" 
              color="primary" 
              className={classes.button}
            >
              Log In
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(LogInDisplay)