import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Albums from "./pages/Albums";
import Contact from "./pages/Contact";
import Header from "./components/common/Header";

const App = () => {
    const [language, setLanguage] = useState("en");

    return (
        <Router>
            <Header onLanguageChange={setLanguage} />
            <Routes>
                <Route path="/" element={<Home language={language} />} />
                <Route path="/albums" element={<Albums />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;
