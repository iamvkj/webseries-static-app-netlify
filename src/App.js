import React from "react";
import { Routes, Route } from "react-router-dom";
import Bollywood from "./components/Bollywood";
import Hollywood from "./components/Hollywood";

const App = () => (
    <>
        <h1 className="text-center" style={{ margin: "35px 0px", marginTop: "90px" }}>List of web series of all time</h1>

        <Routes>
            <Route exact path="/" element={<Bollywood />} />
            <Route exact path="/hollywood" element={<Hollywood />} />
        </Routes>
    </>
);

export default App;