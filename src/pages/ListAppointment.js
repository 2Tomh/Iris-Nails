import { useEffect, useState } from "react";
import { getAppointments } from "../apis/appointment";
import { useNavigate } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import HeightIcon from '@mui/icons-material/Height';
import TablePagination from '@mui/material/TablePagination';
import Paper from "@mui/material/Paper";
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import ButtomNav from '..//pages/Nav/ButtomNav';


const ListAppoitment = () => {
    const { user } = useContext(UserContext);

    const [appointments, setAppointments] = useState([]);

    const navigate = useNavigate()

    const getAllAppointments = async () => {
        try {
            const result = await getAppointments();
            setAppointments(result.data)
        }
        catch (err) {
            navigate('/Home')
        }
    }


    useEffect(() => {
        getAllAppointments()
    }, [])

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }
    function SortHDate() {
        const newSort = [...appointments].sort((a, b) => (
            a.date > b.date ? -1 : 1))
        setAppointments(newSort)
    }
    function SortHour() {
        const newSort = [...appointments].sort((a, b) => (
            a.hour > b.hour ? -1 : 1))
        setAppointments(newSort)
    }
    function SortUserName() {
        const newSort = [...appointments].sort((a, b) => (
            a.username > b.username ? -1 : 1))
        setAppointments(newSort)
    }

    const [pg, setpg] = useState(0);
    const [rpg, setrpg] = useState(5);

    function handleChangePage(event, newpage) {
        setpg(newpage);
    }

    function handleChangeRowsPerPage(event) {
        setrpg(parseInt(event.target.value, 10));
        setpg(0);
    }
    function userPhone() {
        if (user.length > 0 && user.map((a, index) => {
        }));
    }

    return (
        <Paper style={{ background: "rgb(240 128 224 / 16%)", height: "150vh" }}>
            <h1 style={{ textAlign: "center", color: "black" }}>מעקב אחר הזמנות</h1>
            <TableContainer sx={{ border: "double", width: "50%", marginLeft: "25%", marginRight: "50%" }} component={Paper} >
                <Table size="small" aria-label="simple table" sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" sx={{ borderBottomColor: "black", fontWeight: "bold", fontSize: "x-large" }} >
                                <bottom onClick={SortUserName}><HeightIcon /></bottom>שם
                            </TableCell>

                            <TableCell align="center" sx={{ borderBottomColor: "black", fontWeight: "bold", fontSize: "x-large" }}>
                                <bottom onClick={SortHDate}> <HeightIcon /></bottom> תאריך
                            </TableCell>

                            <TableCell align="center" sx={{ borderBottomColor: "black", fontWeight: "bold", fontSize: "x-large" }}>
                                <bottom onClick={SortHour}> <HeightIcon /></bottom>שעה
                            </TableCell>

                            <TableCell align="center" sx={{ borderBottomColor: "black", fontWeight: "bold", fontSize: "x-large" }}>סוג טיפול</TableCell>
                            <TableCell align="center" sx={{ borderBottomColor: "black", fontWeight: "bold", fontSize: "x-large" }}>מספר טלפון</TableCell>
                        </TableRow>
                    </TableHead>



                    <TableBody   >
                        {appointments.length > 0 && appointments.slice(pg * rpg, pg *
                            rpg + rpg).map((a, index) => (
                                <TableRow key={index} sort={formatDate(a.date)}  >

                                    <TableCell align="center" sx={{ borderBottomColor: "black", fontWeight: "bold" }}>{a.username}</TableCell>
                                    <TableCell align="center" sx={{ borderBottomColor: "black", fontWeight: "bold" }}>{formatDate(a.date)}</TableCell>
                                    <TableCell align="center" sx={{ borderBottomColor: "black", fontWeight: "bold" }}>{a.hour}</TableCell>
                                    <TableCell align="center" sx={{ borderBottomColor: "black", fontWeight: "bold" }}>{a.treatments.join(" , ")}</TableCell>
                                    <TableCell align="center" sx={{ borderBottomColor: "black", fontWeight: "bold" }}>{a.phone}</TableCell>

                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 20]}
                    component="div"
                    count={[...appointments].length}
                    rowsPerPage={rpg}
                    page={pg}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        </Paper >
           
    )
}

export default ListAppoitment;