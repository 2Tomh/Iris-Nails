import { Box, Typography } from '@mui/material';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import About from "./About"
import backgroundImage from "../images/pink-background.jpg"
import ServicesImageText from "./ServicesImageText"
import ButtomNav from '../Nav/ButtomNav';
import Carousel from "react-material-ui-carousel";

import slide1 from "../images/slide1.jpeg"
import slide2 from "../images/slide2.jpg"
import slide3 from "../images/slide3.jpg"
import slide4 from "../images/slide4.jpg"
import slide5 from "../images/slide5.jpg"
import slide6 from "../images/slide6.jpg"
let FloatingImage = [
    <img src={slide6} key="6" />,
    <img src={slide5} key="5" />,
    <img src={slide4} key="4" />,
    <img src={slide3} key="3" />,
    <img src={slide2} key="2" />,
    <img src={slide1} key="1" />,

];

const Homepage = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

    return (

        <Box>

            <About
                imageBackgroundSrc={backgroundImage}
                containerStyles={slideShowContainerStyles}
                backgroundImageStyles={slideShowBackgroundStyles}
            />
            <Box
                style={{
                    height: "600px",
                    display: "flex",
                    alignItems: "center",
                    margin: isDesktop ? "40px 0px 20px 0px" : "0px 0px 30px 0px",
                    flexDirection: isDesktop ? "row" : "column",
                    height: isDesktop ? "600px" : "unset",
                }}
            >
                <Box>
                <Carousel IndicatorIcon={FloatingImage} swipe={true} />
                </Box>
                   <Box
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "30px",
                        textAlign: 'center'
                    }}
                >
                    <Typography
                        style={{ fontFamily: "monospace", direction: "rtl" }}
                        variant="h3"
                    >
                        למה הלקוחות שלנו בוחרים בי?
                    </Typography>
                    <Typography
                        style={{ fontFamily: "monospace" }}
                        variant="h6"
                    >
                        יש מגוון רב של אופציות, הכל נעשה בצורה מדויקת
                    </Typography>
                    <Typography variant="subtitle1">
                        אצלי תמצאי את כל סוגי הלק, איכות ועיצוב ברמה גבוהה
                    </Typography>


                </Box>
            </Box>
            
            <ServicesImageText />
            <ButtomNav />
        </Box>
    );
};

const slideShowImageStyles = {
    maxWidth: "400px",
    maxHeight: "700px",
    position: "absolute",
    right: "20%",
    top: "15%",
    height: "85%",
    zIndex: "999",
};

const slideShowBackgroundStyles = {
    position: "absolute",
    top: 0,
    zIndex: "998",
    height: "100%",
};

const slideShowContainerStyles = { position: "relative" };


export default Homepage;

