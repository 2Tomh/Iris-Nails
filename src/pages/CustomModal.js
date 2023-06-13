import { Modal } from "@mui/material";
import Treatments from "./Treatments";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const CustomModal = (props) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  
  return (
    <Modal open={props.open} className="slide-top" 
    style={{ height: "112vh"}}>
      <div
        style={{ ...styles.content, ...props.modalStyles,
          width: isDesktop ? "550px" :"360px", }}
        className="modalContainer">
        
      <span style={{...styles.closeButton}} onClick={props.close} >X</span>
      <Treatments/>
      </div>
    </Modal>
  );
};

const styles = {
  content: {
    bottom: "145px",
    right: "50%",
    transform: "translate(-50%, 0)",
    left: "50%",
    position: "fixed",
    background:
      "linear-gradient(210deg, rgba(240, 128, 224, 1) 0%, rgba(241, 220, 220, 0.9780287114845938) 100%, rgba(255, 255, 255, 1) 100%)",
    borderRadius:'16px'
  },
  closeButton: {
    position: "absolute",
    top: "30px",
    right: "30px",
    fontSize: "15px",
    fontFamily:'cursive',
    color:'#4F4F4F',
    cursor:'pointer'
  },
};
export default CustomModal;
