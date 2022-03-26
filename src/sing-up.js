import React, { useState } from "react";
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
import { DropzoneDialog } from "material-ui-dropzone";

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
    backgroundColor: "#ab7dc7",
    height: "70px",
    width: "70px",
    top: "-40px",
    right: "-40%",
  },
  btnstyle: {
    margin: "8px 0",

    backgroundColor: "white",
    borderRadius: "20px",
    color: "white",
    color: "#ab7dc7",
    border: "2px solid #ab7dc7",
    borderColor: "#ab7dc7",
  },
  textField: {
    color: "#ab7dc7",
  },
  checkBox: {
    color: "#ab7dc7",
    backgroundColor: "#ab7dc7",
  },
});
const SignUp = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item md={6} xs={12}>
        <img className={classes.image} src="" />
      </Grid>

      <Grid item md={6} xs={12}>
        <Paper elevation={10} className={classes.paperStyle}>
          <Avatar className={classes.avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <Grid align="center">
            <h2 style={{ marginTop: "0px" }}>Sign Up</h2>
          </Grid>
          <TextField label="Name" placeholder="Enter Name" fullWidth required />

          <TextField
            label="Email"
            placeholder="Enter Email"
            type="email"
            fullWidth
            required
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
          />

          <Button
            variant="contained"
            className={classes.btnstyle}
            onClick={() => setOpen(true)}
          >
            Upload Resume
          </Button>
          <FormControlLabel
            control={<Checkbox name="checkedB" className={classes.textField} />}
            label="Remember me"
          />

          <DropzoneDialog
            cancelButtonText={"cancel"}
            submitButtonText={"submit"}
            maxFileSize={5000000}
            open={open}
            onClose={() => setOpen(false)}
            onSave={(files) => {
              console.log("Files:", files);
              setOpen(false);
            }}
            showPreviews={true}
            showFileNamesInPreview={true}
          />
          <Button
            type="submit"
            variant="contained"
            className={classes.btnstyle}
            style={{ backgroundColor: "#ab7dc7", color: "white" }}
            fullWidth
          >
            Sign Up
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

export default SignUp;
