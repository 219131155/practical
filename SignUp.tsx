
import React, { useState } from "react";
import "./sign-up.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase";
import { useNavigate, Link } from "react-router-dom";
import { db } from "../../../../firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import { defaultUser, IUser } from "../../../../Shared/Interface/IUser";
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useAppContext } from "../../../Context";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import logo from "../Authentication/assets/logo.png"
import bg from "../Authentication/assets/bg2.jpg"
import { motion } from "framer-motion"
import { observer } from "mobx-react-lite";


const SignUp = observer(() => {
  const [user, setUser] = useState<IUser>({ ...defaultUser });
  const [confirmPassword, setConfirmPassword] = useState("")
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const { store, api } = useAppContext();

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    setLoading(true)

      api.auth.onSignup(user);
   
    setLoading(false)
    navigate("/login")
  };

  return (

    <div className="sign-up-form" style={{ marginBottom: "10rem" }}>

      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', duration: 2, bounce: 0.3 }}
        className="parent" style={{ marginTop: "0rem", }}>
        <div className="child mt-5">
          <Card sx={{ width: 395 }}>
            <CardContent>
              <div className="display-5 uk-margin text-center" style={{ color: "#01aced" }}>
                Register here
              </div>
              <form onSubmit={handleSignUp}>
                <input type="text"
                  className="uk-input uk-margin"
                  value={user.fullName}
                  placeholder="Full Name"
                  onChange={(e) => setUser({ ...user, fullName: e.target.value })}
                  required
                />
                <input
                  type="tel"
                  pattern="[+]{1}[2-6]{3}[1-8]{2}[0-9]{3}[0-9]{4}"
                  className="uk-input uk-margin"
                  placeholder="Phone number (+26481)"
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                  required
                />
                <textarea
                  style={{ width: "100%", height: "90px" }}
                  className="uk-input uk-margin"
                  value={user.location}
                  placeholder="Enter your address"
                  onChange={(e) => setUser({ ...user, location: e.target.value })}
                  required
                />
                <input
                  type="email"
                  className="uk-input uk-margin"
                  placeholder="Enter your email address"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  required />
                <input
                  className="uk-input uk-margin"
                  type="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  required
                />
                <Button className="w-100" size='small' type="submit" variant="contained" color="info">
                  Register
                  {loading && <span className="load"></span>}
                </Button>
                <Divider orientation="horizontal" flexItem>
                  <Link to="/login" style={{ color: "#01aced" }}>Already have a account? Sign In</Link>
                </Divider>
              </form>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
})

export default SignUp;
