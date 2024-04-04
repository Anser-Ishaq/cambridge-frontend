import {  useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeMain from "./Components/HomeMain/HomeMain";
import ContactMain from "./Components/Contact/ContactMain/ContactMain";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FaqMain from "./Components/FAQ/FaqMain/FaqMain";
import RaboutMain from "./Components/Rabout/RaboutMain";
import Unimain from "./Components/Universities/UniMain/Unimain";
import Refmain from "./Components/RefForm/RefMain/Refmain";
import Login from "./Components/login/Login";
import Signup from "./Components/Signup/Sign";
import Password from "./Components/Password/Password";
import ServiceMain from "./Components/Services/ServiceMain/ServiceMain";
import Portalmain from "./Components/Portal/PortalMain/PortalMain";
import PrivateComp from "./Components/PrivateComponent/PrivateComp";
import PrivateComponent2 from "./Components/PrivateComponent/PrivateComponent2";
import Newpassword from "./Components/Newpass/Newpass";
import Admin from "./Components/Admin/Admin";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <BrowserRouter forceRefresh={true}>
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/faq" element={<FaqMain />} />
          <Route path="/about" element={<RaboutMain />} />
          <Route path="/universities" element={<Unimain />} />

          {/* <Route element={<PrivateComponent2 />}> */}
            <Route path="/portal" element={<Portalmain />} />
            <Route path="/referal-form" element={<Refmain />} />
            <Route path="/contact" element={<ContactMain />} />
          {/* </Route> */}

          {/* <Route element={<PrivateComp />}> */}
           <Route path="/login" element={<Login />} />
          {/* </Route> */}

          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<Password />} />
          <Route path="/reset-password/:id" element={<Newpassword/>} />
          
          <Route path="/services" element={<ServiceMain />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
