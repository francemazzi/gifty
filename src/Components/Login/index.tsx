import "./login.css";
import * as React from "react";
import { useRef, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { LoginModel } from "../../model";
import { Link, useNavigate } from "react-router-dom";

// import { makeStyles, Theme, createStyles } from "@mui/material";

//Redux
import { useAppSelector, UseAppDispatch } from "../../features/hooks";
import { login, checkLogin } from "../../features/Login/Login-slice";

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
  //router
  const navigate = useNavigate();

  //interfaccia utete
  const user: LoginModel = {
    id: 0,
    username: "",
    mail: "",
    password: "",
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLInputElement>(null);

  //redux
  const dispatch = UseAppDispatch();
  const loginData = useAppSelector((state) => state.login.loginList);
  const loginTrue = useAppSelector((state) => state.login.registrato);

  //mail
  const [userEmail, setUserEmail] = useState<string>("");

  //pwd
  const [pwd1, setPwd1] = useState<string>("");
  const [pwd2, setPwd2] = useState<string>("");

  //Is Register
  const [isRegister, setIsRegister] = useState<boolean>(false);

  //focus su input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleClick = () => {};

  //login click
  const handleClickLogin = () => {
    setIsRegister(true);
  };
  //logout click
  const handleClickLogout = () => {
    setIsRegister(false);
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    //setup user obj
    user.id = 0;
    user.username = userEmail.split("@")[0];
    user.mail = userEmail;
    user.password = pwd1;
    pwd1 === pwd2 ? dispatch(login(user)) : console.log("Non corrispondono!");
    setIsRegister(true);
  };

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    user.mail = userEmail;
    user.password = pwd1;
    dispatch(checkLogin(user));
  };

  //TODO
  //1. aggiugnere if(!loginTrue){}else {}
  //2. procedere con todolist

  return (
    <div className="container__form">
      {
        !isRegister ? (
          <div>
            <form
              className="login__container"
              onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur();
              }}
            >
              <h3>Benvenut* in Gifty! 🚪</h3>
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
              <button
                className="input__submit"
                type="submit"
                onClick={handleClick}
              >
                Registrati
              </button>
              <button
                className="input__submit"
                type="submit"
                onClick={handleClickLogin}
              >
                Sei già registrato?
              </button>
            </form>
          </div>
        ) : (
          <div>
            <form
              className="login__container"
              onSubmit={(e) => {
                handleCheck(e);
                inputRef.current?.blur();
              }}
            >
              <h3>Benvenuto in Gifty, effuta il login! 🚪</h3>
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
                onChange={(e) => setPwd1(e.target.value)}
                autoComplete="current-password"
                variant="standard"
              />
              <button
                className="input__submit"
                type="submit"
                onClick={handleClick}
              >
                Accedi
              </button>
            </form>
          </div>
        )

        // (
        //   <div className="login__container">
        //     <h3>Benvenut* {loginData[0].username} 👋🏻</h3>
        //     <div className="navigate">
        //       <button onClick={() => navigate("/organizzaregalo")}>
        //         Organizza regalo
        //       </button>

        //       <button onClick={() => navigate("/festeggiato")}>
        //         Sei il festeggiato? 🥳
        //       </button>
        //     </div>
        //     <button
        //       className="input__submit"
        //       type="submit"
        //       onClick={handleClickLogout}
        //     >
        //       logout
        //     </button>
        //   </div>
        // )
      }
    </div>
  );
}
