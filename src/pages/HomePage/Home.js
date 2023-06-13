import { Box, Paper, Typography } from '@mui/material';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import About from "./About"
import backgroundImage from "../images/pink-background.jpg"
import ServicesImageText from "./ServicesImageText"
import ButtomNav from '../Nav/ButtomNav';
import Carousel from 'react-material-ui-carousel'
import slide1 from "../images/eyebrow3.png"
import slide2 from "../images/nails2.png"
import slide3 from "../images/eyebrow2.png"
import slide4 from "../images/nails1.png"
import slide5 from "../images/eyebrow1.png"
import slide6 from "../images/nails3.png"
import slide7 from "../images/nails5.png"
import slide8 from "../images/nails6.png"


const items = [
    { img: slide1, className: "fadeInUp" },
    { img: slide2, className: "fadeInUp" },
    { img: slide3, className: "fadeInUp" },
    { img: slide4, className: "fadeInUp" },
    { img: slide5, className: "fadeInUp" },
    { img: slide6, className: "fadeInUp" },
    { img: slide7, className: "fadeInUp" },
    { img: slide8, className: "fadeInUp" },
]



const Homepage = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

    return (

        <Box>
            <About
                imageBackgroundSrc={backgroundImage}
                containerStyles={slideShowContainerStyles}
                backgroundImageStyles={slideShowBackgroundStyles}
                imageStyles={slideShowImageStyles}


            />
            <Box
                style={{
                    display: "flex",
                    margin: isDesktop ? "40px 0px 20px 0px" : "40px 0px 30px 0px",
                    flexDirection: isDesktop ? "row" : "row",
                    height: isDesktop ? "300px" : "unset",
                    justifyContent: "center",
                    objectfit: "contain"
                }}
            >

                <Box style={{ width: '30%', objectfit: "contain" }} sx={{ paddingleft: "auto", paddingright: "auto", }}>
                    <Carousel
                        images={items}
                        autoPlay={true}
                        interval={4000}
                        indicatorIconButtonProps={{ style: { display: "none" } }}
                    >
                        {
                            items.map((item, i) => <Item key={i} item={item} />)
                        }
                    </Carousel>
                </Box>

                <Box
                    style={{
                        width: "50%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "30px",
                        textAlign: 'center'
                    }}
                >
                    <Typography
                        style={{ fontStyle:"italic",fontFamily:"cursive", direction: "rtl" }}
                        variant="h3">
                        מה ניתן לעשות אצלי?
                    </Typography>

                    <Typography
                        style={{ fontFamily: "system-ui" }}
                        variant="h6"
                    >
                        מגוון רב של טיפולים, הכל ייעשה בצורה מדויקת
                    </Typography>
                </Box>
            </Box>
            <ServicesImageText />
            <ButtomNav />
        </Box>
    );
};


function Item(props) {
    return (
        <Paper>
            <img style={{ height: '300px', width: "100%" , objectFit:"contain"}} src={props.item.img} />
        </Paper>
    )
}

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

