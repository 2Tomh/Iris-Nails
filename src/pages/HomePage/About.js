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
                    top: isDesktop ? "30%" : "25%",
                    left: isDesktop ? "62%" : "50%",
                    display: "flex",
                    flexDirection: "column",
                    direction: "rtl",
                    gap: "15px",
                    paddingRight: isDesktop ? "30px" : "unset",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography
                    style={{
                        fontSize: "40px",
                        fontFamily: "Robrto, Helvetica ,Arial, sans-serif",
                        fontStyle: "italic"
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
                top: isDesktop ? "35%" : "0%",
                right:isDesktop ? "unset": "20%",
                left: isDesktop ? "10%" : "unset",
                display: "flex",
                flexDirection: "column",
                direction: "rtl",
                gap: "50px",
                paddingRight: isDesktop ? "0px" : "155px",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Typography
                    style={{
                        color: "#9b9b9b",
                        fontFamily: "Miriam Libre, sans-serif",
                        fontSize: "25px",
                        fontStyle:"italic"
                    }}
                    textAlign="right">
                    אצלנו תמצאי את כל סוגי הלק, איכות ועיצוב וצורות לק ברמה
                    <br />
                    הגבוה ביותר , לקביעת תור אנא התחבר/י
                </Typography>
            </Box>
        </Box>
    );
};

export default About;


