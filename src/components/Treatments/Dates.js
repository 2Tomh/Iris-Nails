import * as React from 'react';
import moment from 'moment';
import 'moment/locale/he';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers';
import styles from "../Treatments/Date.module.css"
import { Button } from "@mui/material";
import { getAvailableHour } from '../../apis/appointment';






const DateComponent = (props) => {
    
    const onChangeDate = (e) => {
        props.setDate(e.toDate())
    }
    const valid = function (current) {
        return current.day() == 5 || current.day() == 6;
    };

    const validateDate = async () => {
        const response = await getAvailableHour(props.date)
        const bookedHours = response.data;
        if(bookedHours.length >= 5) return alert("יום זה מלא , אנא בחר/י יום אחר");
        props.nextStep();
    }

    moment.locale("he")
    return (
        <div className={styles.container}>
            <form className={styles.formContainer}>
                <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={'he'} >
                    <h1 className={styles.h1}>אנא בחר תאריך</h1>
                    <DateCalendar onChange={onChangeDate} className={styles.calander} disablePast shouldDisableDate={valid} />
                </LocalizationProvider>
                <br/>
                <Button variant="outlined" onClick={validateDate} sx={{ width: '-webkit-fill-available', borderRadius: '17px' }} disabled={!props.date}>אישור</Button>
            </form>
        </div>
    );
}

export default DateComponent;