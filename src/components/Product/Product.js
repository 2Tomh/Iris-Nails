import { useEffect, useState } from "react";
import styles from "./Product.module.css";
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import RemoveCircleOutlineSharpIcon from '@mui/icons-material/RemoveCircleOutlineSharp';
import { TableCell, TableRow } from "@mui/material";
import { newPurchase } from "../../apis/purchases";
const Product = (props) => {
    const [prevProps, setPrevProps] = useState(props);
    const [counter, setCounter] = useState(0);
    const [total, setTotal] = useState(0);
    const increase = () => {
        setCounter(counter => counter + 1)
    }
    const decrease = () => {
        if(counter == 0) return;
        setCounter(counter => counter - 1)
    }

    const totalCounter = async () => {
        await newPurchase(counter , props.productId)
        setTotal( counter )
    }

    useEffect(()=>{
        if(prevProps !== props){
            setCounter(0);
            setTotal(0);
        }
    },[props])


    return (
        <TableRow >
            <TableCell align="center" sx={{ borderBottomColor: "black", fontWeight: "bold" }}><img className={styles.img} src={props.image} /></TableCell>
            <TableCell align="center" sx={{ borderBottomColor: "black", fontWeight: "bold", fontSize: "1.5rem" }}><tr />{props.name}</TableCell>
            <TableCell align="center" sx={{ borderBottomColor: "black", fontWeight: "bold", fontSize: "1.5rem" }} >{props.quantity}</TableCell>
            <TableCell  align="center" sx={{ borderBottomColor: "black", fontWeight: "bold", fontSize: "1.5rem" }}>
                <button onClick={increase} style={{ background: "none", border: "none" }}><AddCircleOutlineSharpIcon /></button>
                {counter}
                <button onClick={decrease} style={{ background: "none", border: "none" }}><RemoveCircleOutlineSharpIcon /></button>
                <br />
                <button onClick={totalCounter} style={{ background: "none" }}> שמור</button>
            </TableCell>
            <TableCell align="center" sx={{ borderBottomColor: "black", fontWeight: "bold", fontSize: "1.5rem" }}>{props.price}</TableCell>
            <TableCell align="center" sx={{ borderBottomColor: "black", fontWeight: "bold", fontSize: "1.5rem" }}>{props.category}</TableCell>
            <TableCell align="center" sx={{ borderBottomColor: "black", fontWeight: "bold", fontSize: "1.5rem" }}>{total}</TableCell>

        </TableRow>
    )
}

export default Product