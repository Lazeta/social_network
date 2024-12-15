import React from "react";
import s from "./News.module.css";
import { Navigate } from "react-router-dom";

const News = (props) => {
    if (!props.isAuth) return <Navigate to={'/Login'}/>
    return (
        <div className={s.news}>
            News
        </div>
    )
}

export default News;