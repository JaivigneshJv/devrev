import React from "react";
import { BrowserRouter ,Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App () {
    return (
        <BrowserRouter>
         <ToastContainer
      position="bottom-left"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/landing" element={<Landing />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;