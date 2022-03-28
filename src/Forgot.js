import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles({
  image: {
    height: "100vh",
    width: "100%",
    overflow: "none",
  },
  paperStyle: {
    padding: 20,
    width: 280,
    margin: "25px auto",
    fontFamily: "sans-serif",
    borderRadius: "10px",
  },
  avatarStyle: {
    backgroundColor: "crimson",
    height: "70px",
    width: "70px",
    top: "-40px",
    right: "-39%",
  },
  btnstyle: {
    margin: "8px 0",

    backgroundColor: "white",

    color: "crimson",
    border: "2px solid #ab7dc7",
    borderColor: "crimson",
  },
  textField: {
    color: "crimson",
    padding: "8px 0px",
  },
  checkBox: {
    color: "crimson",
    backgroundColor: "crimson",
  },
});
const Forgot = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item md={6} xs={4}>
        <img className={classes.image} src="" />
      </Grid>

      <Grid item md={6} xs={8}>
        <Paper elevation={10} className={classes.paperStyle}>
          <Avatar className={classes.avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <Grid align="center">
            <h2 style={{ marginTop: "0px" }}>Reset Password</h2>
          </Grid>

          <TextField
            color="secondary"
            label="Email"
            placeholder="Enter Email"
            type="email"
            fullWidth
            className={classes.textField}
            required
          />
          <TextField
            color="secondary"
            label="New Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            className={classes.textField}
            required
          />
          <TextField
            color="secondary"
            label="Confirm Password"
            placeholder="Confirm password"
            type="password"
            className={classes.textField}
            fullWidth
            required
          />

          <Button
            type="submit"
            variant="contained"
            className={classes.btnstyle}
            style={{ backgroundColor: "crimson", color: "white" }}
          >
            Confirm
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Forgot;
