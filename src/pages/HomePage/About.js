import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const About = (props) => {
    const {
        containerStyles,
        backgroundImageStyles,
        imageBackgroundSrc,
    } = props;
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));




    return (
        <Box
            style={{
                minWidth: "300px",
                minHeight: "300px",
                ...containerStyles,
            }}
            className="slideshow-container"
        >

            <img
                className="backgroundImage"
                src={imageBackgroundSrc}
                style={{ width: "100%", ...backgroundImageStyles }}
            />
            <Box
                style={{
                    zIndex: "999",
                    position: "absolute",
                    top: isDesktop ? "42%" : "25%",
                    left: "62%",
                    display: "flex",
                    flexDirection: "column",
                    direction: "rtl",
                    gap: "15px",
                    paddingRight: isDesktop ? "0px" : "30px",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography
                    style={{
                        fontSize: "40px",
                        fontFamily: "Fredoka, sans- serif",
                    }}
                >
                    הקוסמטיקה של איריס חיון
                </Typography>
                <hr
                    style={{
                        width: "100px",
                        borderColor: "#ffd8cb",
                        borderWidth: "2px",
                        borderStyle: "solid",
                        marginRight: "initial",
                    }}
                />
            </Box>
            <Box style={{
                zIndex: "999",
                position: "absolute",
                top: isDesktop ? "35%" : "25%",
                left: "20%",
                display: "flex",
                flexDirection: "column",
                direction: "rtl",
                gap: "50px",
                paddingRight: isDesktop ? "0px" : "30px",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Typography
                    style={{
                        color: "#9b9b9b",
                        fontFamily: "Miriam Libre, sans-serif",
                        fontSize: "20px",
                    }}
                    textAlign="right">
                    אצלנו תמצאי את כל סוגי הלק, איכות ועיצוב וצורות לק ברמה
                    <br />
                    הגבוה ביותר
                    <br/><br/><br/>
                    לקביעת תור אנא התחבר/י
                </Typography>
            </Box>
        </Box>
    );
};

export default About;


