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
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

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
    borderRadius: "20px",

    color: "crimson",
    border: "2px solid #ab7dc7",
    borderColor: "crimson",
  },
  textField: {
    color: "crimson",
  },
  checkBox: {
    color: "crimson",
    backgroundColor: "crimson",
  },
});
const Register = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item md={6}>
        <img className={classes.image} src="" />
      </Grid>

      <Grid item md={6}>
        <Paper elevation={10} className={classes.paperStyle}>
          <Avatar className={classes.avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <Grid align="center">
            <h2 style={{ marginTop: "0px" }}>Register</h2>
          </Grid>
          <TextField
            color="secondary"
            label="First Name"
            placeholder="Enter First Name"
            fullWidth
            required
          />
          <TextField
            color="secondary"
            label="Last Name"
            placeholder="Enter Last Name"
            fullWidth
            required
          />

          <TextField
            color="secondary"
            label="Email"
            placeholder="Enter Email"
            type="email"
            fullWidth
            required
          />
          <TextField
            color="secondary"
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
          />

          <FormControlLabel
            control={<Checkbox name="checkedB" className={classes.textField} />}
            label="Remember me"
          />

          <Button
            type="submit"
            variant="contained"
            className={classes.btnstyle}
            style={{ backgroundColor: "crimson", color: "white" }}
            fullWidth
          >
            Register
          </Button>
          <Typography>
            {" "}
            Do you have an account ?
            <Link href="#" className={classes.textField}>
              Login
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Register;
