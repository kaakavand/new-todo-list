import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATHS } from "../config/route.config";
import Home from "../pages/Home.page";
import Star from "../pages/Stars.page";
import { listAction } from "../redux/action/listAction";

function AppRoute() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listAction(JSON.parse(localStorage.getItem("list"))));
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path={PATHS.HOME} element={<Home />} />
                <Route path={PATHS.SPECIAL} element={<Star />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoute;
