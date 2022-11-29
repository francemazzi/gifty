import "./login.css";
import * as React from "react";
import { useRef, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { LoginModel } from "../../model";
import { Link, useNavigate } from "react-router-dom";
// import UserPage from "../UserPage";

//Redux
import { useAppSelector, UseAppDispatch } from "../../features/hooks";
import { login, checkLogin, logout } from "../../features/Login/Login-slice";

//firebase
import userCollectionRer from "../../services/login.services";

export default function LoginInput() {
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
  const loginFalse = useAppSelector((state) => state.login.registrato);

  //mail
  const [userEmail, setUserEmail] = useState<string>("");

  //pwd
  const [pwd1, setPwd1] = useState<string>("");
  const [pwd2, setPwd2] = useState<string>("");

  //Is Register
  const [isRegister, setIsRegister] = useState<boolean>(false);
  //Is login
  const [isLogin, setIsLogin] = useState<boolean>(false);

  //Errore setup
  interface MessageInput {
    errorMessage: boolean;
    msg: string;
  }
  const [messageInputField, setMessageInputField] = useState<MessageInput>({
    errorMessage: false,
    msg: "",
  });
  //focus su input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleClick = () => {};

  //login click
  const handleClickLogin = () => {
    setIsRegister(true);
    console.log(isRegister);
  };

  //logout click
  const handleClickLogout = () => {
    user.mail = "";
    setIsLogin(false);
    dispatch(logout(isLogin));
    setPwd1("");
    setUserEmail("");
    // setIsRegister(false);
  };

  //form di iscrizione
  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    //setup user obj
    user.id = 0;
    user.username = userEmail.split("@")[0];
    user.mail = userEmail;
    user.password = pwd1;
    pwd1 === pwd2 ? dispatch(login(user)) : console.log("Non corrispondono!");
    setIsRegister(true);
    //Invio dati firebase
    try {
      await userCollectionRer.addUsers(user);
      setMessageInputField({
        errorMessage: false,
        msg: "Login ok aggiunta",
      });
    } catch (err) {
      setMessageInputField({
        errorMessage: true,
        msg: "errore caricamento",
      });
    }
    setUserEmail("");
    setPwd1("");
  };

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    user.mail = userEmail;
    user.password = pwd1;
    dispatch(checkLogin(user));
  };

  return (
    <div className="container__form">
      {!loginTrue ? (
        <div>
          {!isRegister ? (
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
                  onClick={handleCheck}
                >
                  Accedi
                </button>
              </form>
            </div>
          )}
        </div>
      ) : (
        <div className="login__container">
          <h3>Benvenut* {loginData[0].username} 👋🏻</h3>
          <div className="navigate">
            <button onClick={() => navigate("/organizzaregalo")}>
              Organizza regalo
            </button>

            <button onClick={() => navigate("/festeggiato")}>
              Sei il festeggiato? 🥳
            </button>
          </div>
          <button
            className="input__submit"
            type="submit"
            onClick={handleClickLogout}
          >
            logout
          </button>
        </div>
      )}
    </div>
  );
}
