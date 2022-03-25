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
  paperStyle: {
    padding: 20,
    height: "80vmh",
    width: 280,
    margin: "20px auto",
  },
  avatarStyle: { backgroundColor: "#ab7dc7" },
  btnstyle: {
    margin: "8px 0",
    backgroundColor: "#ab7dc7",
    color: "white",
  },
  textField: {
    color: "#ab7dc7",
    borderColor: "yellow",
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
    <Grid justifyContent="center">
      <Paper elevation={10} className={classes.paperStyle}>
        <Grid align="center">
          <Avatar className={classes.avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
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
        <TextField
          label="Email"
          placeholder="Enter Email"
          type="email"
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
        <FormControlLabel
          control={<Checkbox name="checkedB" className={classes.textField} />}
          label="Remember me"
        />
        <Button
          type="submit"
          variant="contained"
          className={classes.btnstyle}
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
  );
};

export default SignUp;
