import "./login.css";
import * as React from "react";
import { useRef, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { LoginModel } from "../../model";
// import { makeStyles, Theme, createStyles } from "@mui/material";

//Redux
import { useAppSelector, UseAppDispatch } from "../../features/hooks";
import { login } from "../../features/Login/Login-slice";

//da rifare style
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     login__container: {
//       background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//       boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//     },
//   })
// );

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

//sostiuire clasname con -> className={classes.login__container}
export default function LoginInput() {
  //   const classes = useStyles();

  const user: LoginModel = {
    id: 0,
    username: "",
    mail: "",
    password: "",
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLInputElement>(null);

  const dispatch = UseAppDispatch();

  //mail
  const [userEmail, setUserEmail] = useState<string>("");

  //pwd
  const [pwd1, setPwd1] = useState<string>("");
  const [pwd2, setPwd2] = useState<string>("");
  const [matchPwd, setMatchPwd] = useState<string>("");

  //focus su input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleClick = () => {};

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    //setup user obj
    user.id = 0;
    user.username = userEmail.split("@")[0];
    user.mail = userEmail;
    user.password = pwd1;
    pwd1 === pwd2 ? dispatch(login(user)) : console.log("Non corrispondono!");
  };

  return (
    <div className="container__form">
      <h3>Benvenuto in Gifty! 🚪</h3>
      <form
        className="login__container"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <TextField
          required
          value={userEmail}
          id="standard-mail-input"
          label="Mail  "
          type="text"
          ref={inputRef}
          autoComplete="current-password"
          variant="standard"
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
        <TextField
          required
          id="standard-password-input"
          label="Password "
          type="password"
          value={pwd1}
          autoComplete="current-password"
          variant="standard"
          onChange={(e) => setPwd1(e.target.value)}
        />
        <TextField
          required
          id="standard-password-input"
          label="Conferma password "
          type="password"
          value={pwd2}
          onChange={(e) => setPwd2(e.target.value)}
          autoComplete="current-password"
          variant="standard"
        />
        <button className="input__submit" type="submit" onClick={handleClick}>
          Registrati
        </button>
      </form>
    </div>
  );
}
