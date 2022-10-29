import "./login.css";
import * as React from "react";
import TextField from "@mui/material/TextField";
// import { makeStyles, Theme, createStyles } from "@mui/material";

//da rifare style
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     login__container: {
//       background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//       boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//     },
//   })
// );

//sostiuire clasname con -> className={classes.login__container}
export default function Login() {
  //   const classes = useStyles();
  return (
    <div className="login__container">
      <TextField
        required
        id="standard-password-input"
        label="Nome "
        type="name"
        autoComplete="current-password"
        variant="standard"
      />
      <TextField
        required
        id="standard-password-input"
        label="Mail  "
        type="mail"
        autoComplete="current-password"
        variant="standard"
      />
      <TextField
        required
        id="standard-password-input"
        label="Password "
        type="password"
        autoComplete="current-password"
        variant="standard"
      />
    </div>
  );
}
