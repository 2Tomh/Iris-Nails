import CustomModal from "./CustomModal";
import { useNavigate } from "react-router-dom";


const Modal = () => {
    const navigate = useNavigate()



    return (
        <div >
            <CustomModal open={true} close={() => navigate("/")}>
                <div style={styles.divContainer} className="formContainer"></div>
            </CustomModal>
        </div>
    )
};

const styles = {
    divContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "75px",
    },
};

export default Modal;
