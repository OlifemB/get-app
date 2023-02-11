import React from "react";
import {Main} from './main'
import {Route, Routes} from "react-router-dom";

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
    );
};