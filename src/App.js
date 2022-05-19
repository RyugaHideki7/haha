import Button from "./components/Button";
import Tog from "./components/Tog";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Select from "./components/Select";
import Footer from "./components/Footer";
import LateFooter from "./components/LateFooter";
import React, { Suspense } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Error from "./pages/Error";
import Forgot from "./pages/Forgot";
import Signup from "./pages/Signup";
import Signuppro from "./pages/Signuppro";
import Signin from "./pages/Signin";
//const Signin= React.lazy(() => import('./pages/Signin'));

function App() {
    return (
        /*<Suspense
            fallback={<div>Loading...</div>}>*/
            <Router>
                <Routes>
                    <Route path="/" element={<Hero/>}/>
                    <Route path="/About" element={<Hero/>}/>
                    <Route path="/Signin" element={<Signin/>}/>
                    <Route path="/Signup" element={<Signup/>}/>
                    <Route path="/Signuppro" element={<Signuppro/>}/>
                    <Route path="*" element={<Error/>}/>
                    <Route path="/Forgotpassword" element={<Forgot/>}/>
                </Routes>
            </Router>
        //</Suspense>
    );
}

export default App;
