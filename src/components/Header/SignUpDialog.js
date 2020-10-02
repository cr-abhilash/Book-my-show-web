import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
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
  },
}));
export default function SignInDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [password, setPassWord] = React.useState("");
  const [email, setEmail] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <Button className={classes.SignInButton} onClick={handleClickOpen}>
        sign up
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xs"
      >
        <DialogTitle id="form-dialog-title" className={classes.signinTitle}>
          Register
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="fullName"
            label="Full Name:"
            type="text"
            fullWidth
            placeholder="Enter your full name"
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email:"
            type="text"
            fullWidth
            placeholder="Enter your email id"
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
          <Button onClick={handleSubmit} color="primary">
            Sign UP
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
