import { Box } from "@mui/system"
import FingerManicureSvg from "../SVG/FingerManicureSvg";
import NailArtSvg from "../SVG/NailArtSvg";
import PedicureSvg from "../SVG/PedicureSvg";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconText from "./IconText"
import fingerflowers from "../images/fingers-flower.jpg"
import Scissors from "../SVG/Scissors";

const iconTexts = [
    {
        title: "פדיקור",
        subtext: "מסירה גם את העור הכי קשה שיש",
        Icon: PedicureSvg,
    },
    {
        title: "מניקור",
        subtext: "סידור וניקיון הציפורן",
        Icon: FingerManicureSvg,
    },
    {
        title: " גבות ושפם",
        subtext: "צביעה ועיצוב גבות ושפם",
        Icon:Scissors,
    },
    {
        title: "בנייה",
        subtext: "בנייה באקריל או בג'ל לפי בחירתך",
        Icon:NailArtSvg
    },
];


const ServicesImageText = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Box style={{ display: 'flex', flexDirection: isDesktop ? "row" : 'column' }}>
            <Box
                style={{
                    maxWidth: isDesktop ? "50%" : "100%",
                    width: "100%",
                    display: isDesktop ? "grid" : "block",
                    gridTemplateColumns: "1fr 1fr",
                }}
            >
                     {iconTexts.map((iconText) => (
                    <IconText
                        Icon={iconText.Icon}
                        title={iconText.title}
                        subtext={iconText.subtext}
                    />
                ))}
            
            </Box>
            <img src={fingerflowers} />
        </Box>
    )
}

export default ServicesImageText;