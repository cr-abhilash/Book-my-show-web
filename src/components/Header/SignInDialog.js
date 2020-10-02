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
  const [userName, setUserName] = React.useState("");
  const [password, setPassWord] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const UpdateName = (event) => {
    event.preventDefault();

    setUserName(event.target.value);
  };
  const UpdatePassword = (event) => {
    event.preventDefault();

    setPassWord(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSignIn = () => {
    if (userName === "" || userName.length > 100) {
      alert("User Name is required");
    } else if (password === "" || password.length < 4) {
      alert("password required(minimum of 4 character)");
    }
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
            label="User Id:"
            type="email"
            value={userName}
            fullWidth
            required
            placeholder="Enter your user name"
            onChange={UpdateName}
          />
          <TextField
            margin="dense"
            id="name"
            label="Password: required minimum 4 character"
            type="password"
            placeholder="Enter your user password"
            fullWidth
            required
            onChange={UpdatePassword}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSignIn} color="primary">
            Sign In
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
