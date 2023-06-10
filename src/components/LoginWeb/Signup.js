import { Button, TextField } from "@mui/material";
import styles from './Signup.module.css'
import {signup} from "../../apis/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Signup = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [mail, setMail] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [error , setError] = useState("")
    const navigate = useNavigate()

    const onClickSignup = async (e) => {
        e.preventDefault()
        try{
            await signup(username, password, mail, address, phoneNumber)
            navigate("/")
        }
        catch(err){
            if(err.response.status == 401){
                setError("All fields are requierd")
            }
        }
        
    }

    return (
        <>
            <h1 className={styles.title}>Account</h1>
            <h2 className={styles.subtitle}>צעד אחד קטן... ועולם טיפולים חדש ייפתח בפניך</h2>
            <TextField variant="outlined" label="Full Name" value={username} onChange={(e) => setUsername(e.target.value)} required={true} />
            <TextField variant="outlined" label="Address" value={address} onChange={(e) => setAddress(e.target.value)} required={true} />
            <TextField variant="outlined" label="Phone"  value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required={true}/>
            <TextField variant="outlined" label="E-Mail" value={mail} onChange={(e) => setMail(e.target.value)} required={true} />
            <TextField variant="outlined" label="Password" type="password"  value={password} onChange={(e) => setPassword(e.target.value)} required={true}/>
            {error && <p className={styles.error}>{error}</p>}
            <Button variant="outlined" onClick={onClickSignup} type="submit" >Sign up</Button>
            <div>
                <span>Have An account?</span>
                <Button variant="text" onClick={()=>props.onClickLogin(true)}>Log in </Button>
            </div>
        </>
    )
}

export default Signup;
