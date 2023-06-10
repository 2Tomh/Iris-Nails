import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { verification } from "../../apis/auth"
import styles from './Verification.module.css'


const Verification = (props) => {
    const [username, setUserName] = useState("");
    const [error, setError] = useState("");
    
    const onVerification = async (e) => {
        e.preventDefault()
        try {
            if(!username){
                return handleError("All fields are required", 5000)

            }
            await verification(username)

        }
        catch(err){
            if(err.response.status == 401){
                setError("Email doesn't exist")
            }
        }

    }
    const handleError = (msg, time) => {
        setError(msg);
        setTimeout(() => {
            setError("")
        }, time);
    }

    const onClickLogin = () => {
        props.onClickLogin(true);
        props.onVerification(false);
    }

    return (
        <>
            <h1 className={styles.title}>הכנס אימייל/שם משתמש ואנחנו נשלח לך אימות סיסמא לחשבון</h1>
            <TextField label="User Name" variant="outlined" value={username} onChange={(e) => setUserName(e.target.value)} required={true} />
            {error && <p className={styles.error}>{error}</p>}
            <Button variant="text" type="submit" onClick={onVerification}>  אימות</Button>
            <div>
                <span>Have An account?</span>
                <Button variant="text" onClick={onClickLogin}>Log in </Button>
            </div>
        </>
    )
}
export default Verification