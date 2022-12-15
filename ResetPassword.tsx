import react, { useState } from "react"
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Button, Card, CardContent, TextField } from "@mui/material";
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';
import LockIcon from '@mui/icons-material/Lock';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import bg from "../Authentication/assets/bg2.jpg"
import { motion } from "framer-motion"



const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

const ResetPassword = () => {

    const auth = getAuth();
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);



    const onResetPassword = async (e: any) => {
        e.preventDefault();

        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log("Email was send")
                setSuccess(true);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(true)
            })

    }


    return (
        <>
            <div className="login" style={{ backgroundImage: `url(${bg})`, height: "100vh", backgroundSize: "cover" }}>
                <motion.div
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', duration: 2, bounce: 0.3 }}
                >
                    <Card className="logincard" style={{ marginTop: "-2px" }} sx={{ maxWidth: 300 }}>
                        <CardContent>
                            <h1 className="text-center mb-2"><LockIcon style={{ fontSize: "80px" }} /> </h1>
                            <h3 className="text-center m-auto">Trouble Logging In?</h3>
                            <br />
                            <p className="text-center text-muted">Enter your email,  we'll send you a link to get back into your account.</p>
                            <form onSubmit={onResetPassword}>
                                <TextField
                                    style={{ width: "240px" }}
                                    id="outlined-basic"
                                    type="email"
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                    label="Email"
                                    className="w-100"
                                    required />
                                <button style={{ fontWeight: "700px", textTransform: "capitalize", backgroundColor: "#2F80ED", marginTop: "10px", padding: "6px", color: "white", width: "100%", borderRadius: "3px" }} className="capitalize" type="submit">
                                    Send login link {'    '}{'    '}{'    '}
                                    <SendIcon style={{ fontSize: "18px" }} />
                                </button>
                                {error && <span style={{ color: "red" }}>Can't find the email you entered. These means the email doesn't exist. <Link to="/sign-up">Create a new account.</Link> </span>}
                                {success && <span> A link has been send to {email}</span>}
                                <br />
                                <a href="" style={{ fontSize: "12px" }}> <p className="text-center mt-3"> Can't reset your password </p></a>
                                <Divider orientation="horizontal" flexItem>OR</Divider>
                                <Link to="/sign-up"> <h5 className="text-center">Create a new account</h5> </Link>
                            </form>
                            <br />
                            <Link to="/login"><h5 className="text-center">Back To Login</h5></Link>
                        </CardContent>
                    </Card>
                </motion.div>

            </div>
        </>
    )
}

export default ResetPassword;

