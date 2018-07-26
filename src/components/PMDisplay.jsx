import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  dialog: {
    textAlign: 'center',
  },
  button: {
    margin: '10px',
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const PrivateMessageDialog = (props) => {
  const { classes } = props;
  return (
    <Dialog
      open={ props.privateMessage.openState }
      onClose={ props.closeDialog }
      className={ classes.dialog }
      TransitionComponent={Transition}
      keepMounted
    >
      <DialogTitle>Private Message to { props.privateMessage.username }</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter message text:
        </DialogContentText>
        <form onSubmit={ props.handleFormSubmit }>
          <TextField
            autoFocus
            margin="dense"
            id="message"
            type="text"
            onChange={ props.handleInputChange('message') }
            value={ props.message }
            fullWidth
          />
          <Button 
            type="submit"
            variant="outlined"
            className={ classes.button }
          >
            Send
          </Button>
          <Button
            variant="outlined"
            onClick={()=> props.closeDialog()}
            className={ classes.button }
          >
            Cancel
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
};

export default withStyles(styles)(PrivateMessageDialog);