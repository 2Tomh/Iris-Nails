import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const IconText = (props) => {
    const { title, Icon, subtext } = props;
    return (
        <Box
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "column",
                backgroundColor: "#f3f3f3",
                width: "100%",
                padding: "50px 4px",
                border: "1px solid #e7e7e7",
                gap: '15px'
            }}
        >
            <Box
                style={{
                    backgroundColor: "#ffd8cb",
                    borderRadius: "50px",
                    width: "80px",
                    paddingLeft: "10px",
                }}
            >
                <Icon />
            </Box>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="subtitle1">{subtext}</Typography>
        </Box>
    );
};

export default IconText;
