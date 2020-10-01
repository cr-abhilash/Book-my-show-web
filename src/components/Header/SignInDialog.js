import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  signinTitle: {
    textAlign: "center",
  },
  SignInButton: {
    border: "0.5px solid rgb(197, 191, 191)",
    padding: "5px",
    borderRadius: "5px",
    width: "80px",
    textAlign: "center",
    fontSize: 14,
    color: "#ffffff",
    marginRight: "10px",
  },
}));
export default function SignInDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className={classes.SignInButton} onClick={handleClickOpen}>
        sign in
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xs"
      >
        <DialogTitle id="form-dialog-title" className={classes.signinTitle}>
          Login
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="User Name:"
            type="email"
            fullWidth
            placeholder="Enter your user name"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password:"
            type="password"
            placeholder="Enter your user password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Sign In
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
