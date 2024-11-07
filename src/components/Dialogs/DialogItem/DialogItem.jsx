import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import Icon from "../Icon/Icon";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog}>
        <div className={s.dialogItem}>
            <Icon src={props.src} alt={props.src}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    </div>
}

export default DialogItem;