import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import TutorialDataService from "../../services/tutorial.service";
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
    if (
      userName === "" ||
      !userName.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    ) {
      alert("Invalid User Id");
    } else if (password === "" || password.length < 4) {
      alert("password required(minimum of 4 character)");
    } else {
      console.log("handle Signin");
      const data = {
        userId: userName,
        password: password,
      };
      localStorage.setItem("token", "abc");
      localStorage.setItem("userId", "userId");
      TutorialDataService.signIn(data);
      // .then((res) => {
      //   console.log(res.body);
      //   localStorage.setItem("token", "abc");
      //   localStorage.setItem("userId", "userId");
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
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
