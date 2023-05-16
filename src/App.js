import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication";
import NavBar from "./pages/NavBar";
import Treatments from "./pages/Treatments";
import Homepage from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/treatments" element={<Treatments />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
