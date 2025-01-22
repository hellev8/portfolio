import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import Albums from "./pages/Albums";

const App = () => {
    return (
        <Router>
            <div className="app">
                {/* Header visibile su tutte le pagine */}
                <Header/>
                {/* Contenuto principale */}
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/albums" element={<Albums/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        {/* Aggiungi altre rotte qui in futuro */}
                    </Routes>
                </main>
                {/* Footer visibile su tutte le pagine */}
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
