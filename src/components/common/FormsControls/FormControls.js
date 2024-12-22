import React from "react";
import s from "../FormsControls/FormControls.module.css";
import { Field } from "redux-form";


const FormControl = ({ meta: { touched, error }, children}) => (
  <div className={`${s.formControl} ${touched && error ? s.error : ""}`}>
    <div>{children}</div>
    {touched && error && <span>{error}</span>}
  </div>
);

export const Textarea = (props) => (
  <FormControl {...props}>
    <textarea {...props.input} {...props} />
  </FormControl>
);
export const Input = (props) => (
  <FormControl {...props}>
    <input {...props.input} {...props} />
  </FormControl>
);
export const CreateField = (
  component,
  name,
  validators,
  placeholder,
  props = {}, text = ""
) => (
  <div>
    <Field
      component={component}
      placeholder={placeholder}
      name={name}
      validate={validators}
      {...props}
    /> {text}
  </div>
);
