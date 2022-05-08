import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./layout/Header";
import AppRoute from "./routes/AppRoute";
import './assets/css/style.css'
import "./assets/styles/global.scss";
import { Provider } from "react-redux";
import {store}  from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppRoute />
        </Provider>
    </React.StrictMode>
);
