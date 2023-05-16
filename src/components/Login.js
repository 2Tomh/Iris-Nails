import { Button, TextField } from "@mui/material";
import styles from "./Login.module.css"
import { login } from "../apis/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {

    const [password, setPassword] = useState("")
    const [username, setUserName] = useState("")
    const [error, setError] = useState("");

    

    const navigate = useNavigate()

    const onLogin = async (e) => {
        e.preventDefault()
        try {
            if (!password || !username) {
                return handleError("All fields are required", 5000)

            }
            const response = await login(username, password);
            if(response.data){
                localStorage.setItem('token', response.data)
                navigate("/Home")
            }
        }
        catch (err) {
            if (err.response.status == 401) {
                handleError("Email or password are invalid", 3000)
            }
        }
    }

    const handleError = (msg, time) => {
        setError(msg);
        setTimeout(() => {
            setError("")
        }, time);
    }

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            navigate('/Home');
        }
    },[])

    return (
        <>

            <h1 className={styles.headline}>הקוסמטיקה של איריס</h1>

            <h2 className={styles.title}>Login</h2>
            <TextField label="User Name" variant="outlined" value={username} onChange={(e) => setUserName(e.target.value)} required={true} />
            <TextField label="Password" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required={true} />
            <Button variant="outlined" onClick={onLogin}  type="submit">Login</Button>
            {error && <p className={styles.error}>{error}</p>}
            <Button variant="text" onClick={()=> props.onVerification(true)}>Forgot Password?</Button>
            <div className={styles.signup}>
                <span>Dont you have an account?</span>
                <Button variant="text" onClick={() => props.onClickSignup(false)} >Sign Up</Button>
            </div>

        </>
    )
}
export default Login;