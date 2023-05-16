import * as React from 'react';
import moment from 'moment';
import 'moment/locale/he';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers';
import styles from "../Treatments/Date.module.css"
import { Button } from "@mui/material";
import { useState } from 'react';





const DateComponent = (props) => {
    
    
    const onChangeDate = (e) => {
        props.setDate(e.toDate())
    }

   
    moment.locale("he")
    return (
        <div className={styles.container}>
            <form className={styles.formContainer}>
                <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={'he'} >
                    <h1 className={styles.h1}>אנא בחר תאריך</h1>
                    <DateCalendar  onChange={onChangeDate} className={styles.calander} disablePast />
                </LocalizationProvider>
                <Button variant="outlined" onClick={props.nextStep}  sx={{width:'-webkit-fill-available',borderRadius:'17px'}} disabled={!props.date}>אישור</Button>
            </form>
        </div>
    );
}

export default DateComponent;