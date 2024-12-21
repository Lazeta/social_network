import React from "react";
import s from "../FormsControls/FormControls.module.css";

const FormControl = ({ input, meta, children, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
}

export const Textarea = ({ input, meta, children, ...restProps }) => {
    return (
        <FormControl {...restProps}>
            <textarea {...input} {...restProps} />
        </FormControl>
    );
}

export const Input = ({ input, meta, children, ...restProps }) => {
    return (
        <FormControl {...restProps}>
            <input {...input} {...restProps} />
        </FormControl>
    );
}