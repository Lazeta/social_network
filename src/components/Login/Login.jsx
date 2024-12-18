import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormControls";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import style from "../common/FormsControls/FormControls.module.css";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login" name={'login'}
                    component={Input}
                    validate={[required]} />
            </div>
            <div>
                <Field placeholder="Password" name={'password'}
                    component={Input}
                    validate={[required]} />
            </div>
            <div>
                <Field component={Input}
                    name={'rememberMe'}
                    type="checkbox" >remember me</Field>
            </div>
            <div className={Input} name={"rememberMe"} type={"checkbox"}>
                remember me
            </div>
            <div className={style.formSummaryError}>
                ERROR
            </div>
            <div>
                <button type="submit">Login </button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        const { email, password, rememberMe } = formData;
        props.login(email, password, rememberMe);
    }

    props.isAuth && <Navigate to="/profile" />

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);