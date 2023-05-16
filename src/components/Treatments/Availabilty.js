import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import styles from "../Treatments/Availabilty.module.css"
import { useEffect, useState } from "react";
import DoneIcon from '@mui/icons-material/Done';
import { getAvailableHour } from "../../apis/appointment";


const Availabilty = (props) => {
    const [hours, setHours] = useState({
        10: true,
        12: true,
        14: true,
        16: true,
        18: true
    })

    const onChangeAlightment = (e, value) => {
        props.setHour(value)
    }


    const  getAvailableHours = async()=>{
        const response = await getAvailableHour(props.date)
        const takenHours = response.data;
        setHours(() => {
            return {
                10: takenHours.find((h) => h.hour == 1000) ? false : true,
                12: takenHours.find((h) => h.hour == 1200) ? false : true,
                14: takenHours.find((h) => h.hour == 1400) ? false : true,
                16: takenHours.find((h) => h.hour == 1600) ? false : true,
                18: takenHours.find((h) => h.hour == 1800) ? false : true
                
            }

        })

    }

    useEffect(() => {
        getAvailableHours()
        
    }, [])
    return (
        <div className={styles.container}>
            <form className={styles.content}>
                <h1 className={styles.h1}>בחר שעה</h1>
                <div >
                    <ToggleButtonGroup sx={{ flexDirection: 'column' }} size="small" onChange={onChangeAlightment} aria-label="Small sizes" value={props.hour}
                        exclusive>
                        <ToggleButton sx={{ width: '200px', }} value="1000" key="1000">
                            <div style={{ display: 'flex', borderRadius: '17px' }}>
                                <span>10:00 </span>
                                {!hours['10'] ? <span>תפוס</span> : <DoneIcon sx={{ color: 'green' }} />}
                            </div>
                        </ToggleButton>

                        <ToggleButton value="1200" key="1200" sx={{ backgroundColor: '#f9b9b9' }} >
                            <div style={{ display: 'flex', borderRadius: '17px' }}>
                                <span>12:00 </span>
                               {!hours['12'] ? <span>תפוס</span> :<DoneIcon sx={{ color: 'green' }} />}
                            </div>
                        </ToggleButton>

                        <ToggleButton value="1400" key="1400" sx={{ backgroundColor: '#f9b9b9' }} >
                            <div style={{ display: 'flex', borderRadius: '17px' }}>
                                <span>14:00 </span>
                              {!hours['14'] ? <span>תפוס</span> : <DoneIcon sx={{ color: 'green' }} />}
                            </div>
                        </ToggleButton>

                        <ToggleButton value="1600" key="1600" sx={{ backgroundColor: '#f9b9b9' }} >
                            <div style={{ display: 'flex', borderRadius: '17px' }}>
                                <span>16:00 </span>
                              {!hours['16'] ? <span>תפוס</span> : <DoneIcon sx={{ color: 'green' }} />}
                            </div>
                        </ToggleButton>

                        <ToggleButton value="1800" key="1800" sx={{ backgroundColor: '#f9b9b9' }}>
                            <div style={{ display: 'flex', borderRadius: '17px' }}>
                                <span>18:00 </span>
                               {!hours['18'] ? <span> תפוס</span> :<DoneIcon sx={{ color: 'green' }} />}
                            </div>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <Button variant="outlined" onClick={props.onSubmit}>אישור</Button>
            </form>

        </div>
    )
}
export default Availabilty;