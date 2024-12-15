import React from "react";
import s from "./Music.module.css";
import { Navigate } from "react-router-dom";


const Music = (props) => {
    if (!props.isAuth) return <Navigate to={'/Login'}/>
    
    return (
        <div className={s.music}>
            Music
        </div>
    )
}

export default Music;