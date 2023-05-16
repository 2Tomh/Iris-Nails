import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import styles from "./Treatments.module.css";
import { appointment } from "../apis/appointment"
import {useState } from "react";
import DateComponent from "../components/Treatments/Dates";
import Availabilty from "../components/Treatments/Availabilty"
import { useNavigate } from "react-router-dom";

  

const Treatments = () => {
    const [steps, setSteps] = useState(1);
    const [treatments, setTreaments] = useState({
        menicure: false,
        mustache: false,
        eyebrow: false,
        pedicure: false
    });
    const [date, setDate] = useState ()
    const [hour, setHour] = useState()

    const { menicure, mustache, eyebrow, pedicure } = treatments;

    const navigate = useNavigate();

    const onSubmit = async() => {
        await appointment(date,hour,treatments)
        navigate("/Home")
    }

    const nextStep = async () => {
        if(steps == 1){
            if(!menicure && !mustache && !eyebrow && !pedicure) return
        }

        setSteps(prevState => {
            if (prevState >= 3) return;

            return prevState = prevState + 1
        })

    }
  
    
    const handleTreatmentChange = (event) => {
        setTreaments(prevState => ({
            ...prevState,
            [event.target.name]: event.target.checked,
        }))
    }

    if (steps == 2) {
        return (<DateComponent nextStep={nextStep} setDate={setDate} date={date} />)
    }
    if (steps == 3) {
        return (<Availabilty nextStep={nextStep} setHour={setHour} hour={hour} date={date} onSubmit={onSubmit} />)
    }





    return (

        <div className={styles.container}>

            <form className={styles.form}>
                <FormGroup className={styles.formContainer}>
                    <h1 className={styles.h1}>סוגי הטיפולים</h1>
                    <FormControlLabel sx={{marginLeft:'17px'}} className={styles.text} control={<Checkbox checked={menicure} />} label="מניקור" onChange={handleTreatmentChange} name="menicure" />
                    <FormControlLabel sx={{marginLeft:'17px'}} className={styles.text} control={<Checkbox checked={mustache} />} label="שפם" onChange={handleTreatmentChange} name="mustache" />
                    <FormControlLabel sx={{marginLeft:'17px'}} className={styles.text} control={<Checkbox checked={eyebrow} />} label="גבות" onChange={handleTreatmentChange} name="eyebrow" />
                    <FormControlLabel sx={{marginLeft:'17px'}} className={styles.text} control={<Checkbox checked={pedicure} />} label="פדיקור" onChange={handleTreatmentChange} name="pedicure" />
                </FormGroup>
                    <Button variant="outlined" onClick={nextStep} sx={{borderRadius:'17px',width:'300px'}} disabled={!menicure && !mustache && !eyebrow && !pedicure}>אישור</Button>
            </form>
        </div>
    )
}

export default Treatments


