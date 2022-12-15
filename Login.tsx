import React, { useEffect, useState } from "react";
import "./login.scss";
import { useNavigate, Link, Navigate, useLocation } from "react-router-dom";
import TextField from '@mui/material/TextField';
import logo from "../Authentication/assets/logo.png"
import logo1 from "../Authentication/assets/logo.png"
import bg from '../Authentication/assets/bg2.jpg'
import Divider from '@mui/material/Divider';
import { IUser } from "../../../../Shared/Interface/IUser";
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Form, Input } from 'semantic-ui-react';
import LoginIcon from '@mui/icons-material/Login';
import { useAppContext } from "../../../Context";
import AppBlockingIcon from '@mui/icons-material/AppBlocking';
import { observer } from "mobx-react-lite";
import { motion } from "framer-motion"
import { duration } from "moment";


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Login = observer(() => {

  const { store, api } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = store.user.currentUser
  const currentUser = store.auth.meJson;
  const loading = store.auth.loading;
  const error = store.auth.error;

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      api.auth.signIn(email, password);
    } catch (error) {

    }


  };

  console.log("error 3", error);

  if (!!currentUser) {
    currentUser?.role.Admin ? navigate("/a") : navigate("/");
  }

  return (
    <div className="login" style={{ backgroundImage: `url(${bg})`, height: "100vh", backgroundSize: "cover" }}>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', duration: 2, bounce: 0.3 }}
        className="d-block d-lg-none" style={{ marginTop: "-103px" }}>
        <Card className="logincard" sx={{ minWidth: 300 }}>
          <div className="parent" style={{ marginTop: "-7px" }}>
            <div className="child">
              <CardContent>
                <form onSubmit={handleLogin}>
                  <div className="logo">
                    <img src={logo} alt="Logo" />
                  </div>
                  <div className="content" style={{ marginTop: "-48px" }}>
                    <TextField id="outlined-basic" type="email" label="Enter Your Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} required />
                    <br />
                    <br />
                    <TextField id="outlined-basic" type="password" label="Enter Your Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} required />
                    <br />
                    <Link to="/reset" style={{ fontSize: "12px" }}> <p className="text-center">Forgot password?</p></Link>
                    <br />
                    <Button className="w-100" size='small' style={{ marginTop: "-30px" }} type="submit" variant="contained" color="info">
                      Sign In
                      {loading && <span className="load"></span>}
                    </Button>
                    <br />
                    <Divider orientation="horizontal" flexItem>
                      <Link to="/sign-up">Dont have a account? Sign Up</Link>
                    </Divider>
                    <br />
                    <div className="Icons text-center">
                      <a href="">   <span uk-icon="google"></span></a>
                      <a href="">   <span uk-icon="facebook"></span></a>
                      <a href="">   <span uk-icon="twitter"></span></a>
                    </div>
                    {error && <span style={{ color: "red" }}>Wrong email or password</span>}
                  </div>
                </form>

              </CardContent>
            </div>
          </div>

        </Card >
      </motion.div >

      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', duration: 2, bounce: 0.3 }}
        className="d-none d-lg-block con" style={{ backgroundColor: "white", marginTop: "10vh", objectFit: "cover" }}>
        <Card sx={{ width: 500, maxHeight: 265 }}>
          <CardContent>
            <div className="row">
              <div className="col-6" style={{ marginTop: "-30px", marginLeft: "-10px", backgroundColor: "white" }}>
                {/* <img className="logo" src={logo1} style={{ objectFit: 'contain', margin: "auto", zIndex: "-1" }} alt="Logo" /> */}
                {/* <Typography sx={{ fontSize: 12 }} color='text.secondary'>
                  <p className="text-center" style={{ fontFamily: "Roboto", color: "black" }}>KOSHA Cleaning Services</p>
                  <p className="text-center" style={{ fontFamily: "Roboto", color: "black" }}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem dolore dignissimos tempora. </p>
                </Typography> */}
              </div>
              <div className="col-6" style={{ borderLeft: "1px solid pink", display: "inline", justifyContent: "center" }}>
                <div >
                  <Typography sx={{ fontSize: 12 }} color='text.secondary'>
                    <p className="text-center">Login to access your account</p>
                  </Typography>
                  <form onSubmit={handleLogin} style={{ margin: "auto" }} >
                    <div className="uk-margin">
                      <input className="uk-input uk-form-width-medium uk-form-small" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="">
                      <input className="uk-input uk-form-width-medium uk-form-small" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <Link to="/reset" style={{ marginTop: "10px", fontSize: "12px" }}> <p className="text-center">Forgot password?</p></Link>
                    <br />
                    <Button className="w-100" size='small' type="submit" style={{ marginTop: "-32px" }} variant="contained" color="info">
                      Sign In
                      {loading && <span className="load" style={{ marginTop: "-3px" }}></span>}
                    </Button>
                    <Divider orientation="horizontal" flexItem>
                      <Link to="/sign-up">Dont have a account? Sign Up</Link>
                    </Divider>
                    <br />
                  </form>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <h4 className="text-center">
          {error && <span style={{ color: "red" }}>Wrong email or password</span>}
        </h4>
      </motion.div>
    </div >
  );
});

export default Login;


