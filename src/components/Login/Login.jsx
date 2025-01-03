import React from "react";
import { reduxForm } from "redux-form";
import { CreateField } from "../common/FormsControls/FormControls";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer/auth-reducer";
import { Navigate } from "react-router-dom";
import { required } from "../../utils/validators";
import s from "../common/FormsControls/FormControls.module.css";

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {CreateField("input", "Email", "email", [required])}
            {CreateField("input", "Password", "password", [required])}
            {CreateField("input", null, "rememberMe", [], { type: "checkbox" }, "remember me")}

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

    if (isAuth) return <Navigate to="/profile" />

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = ({ auth }) => ({
    isAuth: auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);