import React from "react";
import s from "./Settings.module.css";
import { Navigate } from "react-router-dom";

const Settings = (props) => {
    if (!props.isAuth) return <Navigate to={'/Login'}/>

    return (
        <div className={s.settings}>
            Settings
        </div>
    )
}

export default Settings;