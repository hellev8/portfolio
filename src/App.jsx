import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

const App = () => {
    return (
        <>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer/>
        </>
    );
};


export default App;
