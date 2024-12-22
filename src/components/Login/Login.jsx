import React from "react";
import { reduxForm } from "redux-form";
import { CreateField } from "../common/FormsControls/FormControls";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import { required } from "../../utils/validators";
import s from "../common/FormsControls/FormControls.module.css";

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {CreateField("Input", "Email", "email", [required],)}
            {CreateField("Input", "Password", "password", [required],)}
            {CreateField("Input", null, "rememberMe", [], { type: "checkbox" }, "remember me")}

            {error && <div className={s.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = ({ login, isAuth }) => {
    const onSubmit = (formData) => {
        const { email, password, rememberMe } = formData;
        login(email, password, rememberMe);
    }

    isAuth && <Navigate to="/profile" />

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = ({ auth }) => ({
    isAuth: auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);