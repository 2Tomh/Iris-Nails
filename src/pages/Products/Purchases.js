import { useState, useEffect } from "react";
import { getPurchases } from "../../apis/purchases"
import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";


const ListPurchases = () => {

    const [purchase, setPurchase] = useState([]);
    
    const navigate = useNavigate()

    const getAllPurchases = async () => {
        try {
            const result = await getPurchases();
            setPurchase(result.data)
        }
        catch (err) {
            navigate('/')
        }
    }

    useEffect(() => {
        getAllPurchases()
    }, [])


    return (
        <Paper style={{ height: "100vh" }}>
            <h1 style={{ textAlign: "center", color: "black" }}>רשימת קניות למוצרים</h1> <br /><br />
            <TableContainer sx={{ background: "none", width: "25%", marginLeft: "auto", marginRight: "auto", inlineSize: "fit-content" }} component={Paper} >
                <TableHead>
                    <TableRow>
                        <TableCell align="center" sx={{ borderBottomColor: "black", fontWeight: "bold", fontSize: "x-large" }} >שם</TableCell>
                        <TableCell align="center" sx={{ borderBottomColor: "black", fontWeight: "bold", fontSize: "x-large" }}  > כמות שצריך להזמין</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {purchase.length > 0 && purchase.map((p) => (
                        <TableRow>
                            <TableCell align="center" sx={{ borderBottomColor: "black", fontWeight: "bold", fontSize: "x-large" }}> {p.product.name}</TableCell>
                            <TableCell align="center" sx={{ borderBottomColor: "black", fontWeight: "bold", fontSize: "x-large" }}> {p.quantity}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </TableContainer>
        </Paper>


    )

}

export default ListPurchases;