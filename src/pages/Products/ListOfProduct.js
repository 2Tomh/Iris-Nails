import { useEffect, useState } from "react";
import { getProducts } from "../../apis/products";
import Product from "../../components/Product/Product";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from "@mui/material/Paper";
import TablePagination from '@mui/material/TablePagination';
import styles from "./Product.module.css";
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import RemoveCircleOutlineSharpIcon from '@mui/icons-material/RemoveCircleOutlineSharp';


const ListOfProducts = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const response = await getProducts();
        setProducts(response.data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])


    function handleChangePage(event, newpage) {
        setpg(newpage);
    }

    function handleChangeRowsPerPage(event) {
        setrpg(parseInt(event.target.value, 10));
        setpg(0);
    }

    const [pg, setpg] = useState(0);
    const [rpg, setrpg] = useState(5);

    function SortCategory() {
        const newSort = [...products].sort((a, b) => (
            a.category > b.category ? 1 : -1))
        setProducts(newSort)
    }

    return (
        <Paper style={{ height: "100%" }}>
            <h1 style={{ textAlign: "center", color: "black" }}>ניהול מלאי</h1> <br /><br />
            <TableContainer sx={{ background: "none", width: "65%", marginLeft: "20%", marginRight: "50%" }} component={Paper} >
                <Table size="small" aria-label="simple table" sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow >
                            <TableCell align="center" sx={{ borderBottomColor: "black", fontWeight: "bold", fontSize: "x-large" }} >תמונה</TableCell>
                            <TableCell align="center" sx={{ borderBottomColor: "black", fontWeight: "bold", fontSize: "x-large" }} >שם</TableCell>
                            <TableCell align="center" sx={{ borderBottomColor: "black", fontWeight: "bold", fontSize: "x-large" }}>כמות בפועל</TableCell>
                            <TableCell align="center" sx={{ borderBottomColor: "black", fontWeight: "bold", fontSize: "x-large" }}>כמות שצריך להזמין </TableCell>
                            <TableCell align="center" sx={{ borderBottomColor: "black", fontWeight: "bold", fontSize: "x-large" }} > מחיר בש"ח</TableCell>
                            <TableCell onClick={SortCategory} align="center" sx={{ borderBottomColor: "black", fontWeight: "bold", fontSize: "x-large" }}>תחום </TableCell>
                            <TableCell align="center" sx={{ borderBottomColor: "black", fontWeight: "bold", fontSize: "x-large" }}>סך הכל</TableCell>

                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {products.length > 0 && products.slice(pg * rpg, pg * rpg + rpg).map((p, index) => (
                            <Product key={index} quantity={p.quantity} name={p.name} price={p.price} category={p.category} image={p.image} productId={p._id}/>

                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 20]}
                    component="div"
                    count={[...products].length}
                    rowsPerPage={rpg}
                    page={pg}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
            <br /> <br />
        </Paper>
    )

}

export default ListOfProducts;