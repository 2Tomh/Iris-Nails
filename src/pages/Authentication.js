import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import styles from "./Authentication.module.css"
import { Paper } from "@mui/material";
import Verification from "../components/Verification";


const Authentication = () => {
    const [isLogin, setIsLogin] = useState(true); 
    const [isVerification, setIsVerification] = useState(false); 

   
    return (
        <div className={styles.container}>
            <Paper elevation={2} style={{ padding: '50px', background: "#ffd6d6" }}>
                <form className={styles.form}>
                    {isVerification ? <Verification onVerification={setIsVerification} onClickLogin={setIsLogin} /> :
                        <>
                            {isLogin ? <Login onClickSignup={setIsLogin} onVerification={setIsVerification} /> : <Signup onClickLogin={setIsLogin} />}
                        </>
                    }



                </form>
            </Paper>
        </div>
    )
}


export default Authentication;