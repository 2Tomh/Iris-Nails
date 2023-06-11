import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication";
import NavBar from "./pages/Nav/NavBar";
import Homepage from "./pages/HomePage/Home";
import ListAppoitment from "./pages/ListAppointment";
import Modal from "./pages/Modal"
import UserContextProvider from "./context/userContext";
import ListOfProducts from "./pages/Products/ListOfProduct";
import ListPurchases from "./pages/Products/Purchases";


function App() {

  return (
    <BrowserRouter>
    <UserContextProvider>
        <NavBar />
        <Routes> 
          <Route path="/" element={<Homepage />} />
          <Route path="/login" exact element={<Authentication />} />
          <Route path="/treatments" element={<Modal />} />
          <Route path="/list" element={<ListAppoitment />} />
          <Route path="/product" element={<ListOfProducts />} />
          <Route path="/purchases" element={<ListPurchases />} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
