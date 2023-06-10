import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "../Nav/NavBar.module.css";
import { Box } from "@mui/material";
import { Link } from 'react-router-dom';
import logo from "../images/Logo.png"
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import WebFont from 'webfontloader';
import { useEffect } from "react";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import InventorySharpIcon from '@mui/icons-material/InventorySharp';
const NavBar = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
    const { user } = useContext(UserContext);
    const { setUser } = useContext(UserContext)



    const logOut = () => {
        localStorage.removeItem('token')
        setUser(false)
    }
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Chilanka']
            }
        });
    }, []);

    return (
        <Box style={{ height: isDesktop ? '70%' : '270px' }}>
            <Navbar className={styles.text} >
                <Nav className={styles.nav} >
                    {user?.userId && <Link title="מסך בית" to="/Home" sx={{ marginRight: "-25%", marginTop:"4%" }}><HomeIcon sx={{marginTop:"4%"}}/></Link>}

                    {user?.userId && <Link title="הזמן תור" to="/treatments" sx={{ marginRight: "-25%" }}> <CalendarMonthIcon/></Link>}

                    {user?.isAdmin &&
                        <Link title="מעקב אחר לקוחות" className={styles.options} to="/list"><LibraryBooksIcon/> </Link>}
                    {user?.isAdmin &&
                        <Link title="מעקב אחר מלאי" className={styles.options} to="/product" sx={{ fontFamily: "chilanka"}}> <InventorySharpIcon/></Link>}
                    {user?.userId &&
                        <Link onClick={logOut} title="יציאה" to="/" sx={{ fontFamily: "unset" }} > <ExitToAppIcon /></Link>
                    }
                </Nav>
                    <Box style={logoStyle}>
                        <img src={logo} style={{ height: "75px", marginRight: "14vh" }} />
                    </Box>
            </Navbar>
        </Box>
    );
};

const buttonStyle = {
    boxShadow: "inset 0 0 0 1px #8CC63F",
    borderRadius: "50%",
    padding: " 9px",
    borderColor: "blueviolet",
}
const logoStyle = {
    height: "70%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}



export default NavBar;

