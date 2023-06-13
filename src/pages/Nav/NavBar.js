import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "../Nav/NavBar.module.css";
import { Box, Button } from "@mui/material";
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
import Person2Icon from '@mui/icons-material/Person2';
import ChecklistIcon from '@mui/icons-material/Checklist';

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
        <Box className={styles.text}
         style={{
            display: isDesktop ? styles.text.display: "inline-table",
            padding: isDesktop ? styles.text.padding : "5px",
            flexDirection: isDesktop ? "row" : "column",
            gap: isDesktop ? styles.text.gap : "20px"
        }}>
            <Navbar className={styles.text}
            style={{flexDirection: isDesktop ? "unset" : "column",
                    height: isDesktop ? "unset" : "auto" }} >
                <Nav className={styles.nav} 
                    style={{
                        gap: isDesktop ? styles.nav.gap : "45px"
                    }}
                >
                    <Link title="מסך בית" to="/" sx={{ marginRight: "-25%", marginTop: "4%" }}><HomeIcon sx={{ marginTop: "4%" }} /></Link>
                    {!user?.userId && <Link title="התחבר" to="/login" sx={{ marginRight: "-25%", marginTop: "4%" }}><Person2Icon sx={{ marginTop: "4%" }} /></Link>}
                    {user?.userId && <Link title="הזמן תור" to="/treatments" sx={{ marginRight: "-25%" }}> <CalendarMonthIcon /></Link>}
                    {user?.isAdmin && <Link title="מעקב אחר לקוחות" className={styles.options} to="/list"><LibraryBooksIcon /> </Link>}
                    {user?.isAdmin && <Link title="מעקב אחר מלאי" className={styles.options} to="/product" sx={{ fontFamily: "chilanka" }}> <InventorySharpIcon /></Link>}
                    {user?.isAdmin && <Link title="מעקב אחר הזמנות" className={styles.options} to="/purchases" sx={{ fontFamily: "chilanka" }}> <ChecklistIcon /></Link>}
                    {user?.userId && <Link onClick={logOut} title="יציאה" to="/" sx={{ fontFamily: "unset" }} > <ExitToAppIcon /></Link>}

                </Nav>
                <Box className={logoStyle}>
                    <img src={logo} style={{ height: "75px" }} />
                </Box>
            </Navbar>
        </Box>
    );
};

const logoStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}



export default NavBar;

