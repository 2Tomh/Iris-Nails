import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../pages/NavBar.module.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <Navbar className={styles.text}>
                <Typography variant="subtitle2">
                    <span style={{ fontWeight: "bold", paddingLeft: "20px" ,justifycontent: "left" }}>
                        מספר טלפון: 054-800-0915
                    </span>
                </Typography>
            <Nav variant="tabs" className={styles.nav}>
                <Link to="/Home">דף בית</Link>
                <Link to="/treatments">לקביעת תור</Link>
                <NavDropdown title="Dropdown" className={styles.options}>
                    <NavDropdown.Item >ניהול מלאי</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    );
}




export default NavBar;

