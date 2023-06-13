
import styles from "../Nav/BottomNa.module.css";
import { Typography } from "@mui/material";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';

const ButtomNav = () => {

    const onClickInstagram = () => {
        window.open(`https://www.instagram.com/iris_hayoun_nails/`)
        window.open('')

    }

    const onClickMap = () => {
        window.open(`https://www.google.com/maps/place/31%C2%B057'37.7%22N+34%C2%B049'42.4%22E/@31.9559005,34.8241406,14z/data=!4m4!3m3!8m2!3d31.960479!4d34.828432`)
        window.open('')
    }

    return (
        <div className={styles.text}>
            <Typography variant="subtitle2" >
                    <span style={{ fontWeight: "bold", paddingLeft: "20px", justifycontent: "left" }}>
                    </span>
                </Typography>
            <Typography style={{ cursor: 'pointer' }} onClick={onClickMap} >
                <FmdGoodIcon />
                </Typography>
                <Typography style={{ cursor: 'pointer' }}  >
                <FacebookTwoToneIcon />
            </Typography>
            <Typography style={{ cursor: 'pointer' }} onClick={onClickInstagram}  >
                <InstagramIcon />
                </Typography>
            <p className={styles.text}>&copy; 2023 הקליניקה של איריס חיון , כל הזכויות שמורות</p>

        </div>
    );
};




export default ButtomNav;

