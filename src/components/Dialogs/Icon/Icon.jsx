import React from "react";
import s from '../Dialogs.module.css';
export const Icon = (props) => {
    return <div className={s.Icon}>
        <img src={props.src} alt={props.alt}/>
    </div>
}

export default Icon;