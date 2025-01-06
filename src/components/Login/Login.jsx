import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer/auth-reducer";
import { Navigate } from "react-router-dom";
import * as Yup from "yup";
import s from "./Login.module.css";

const LoginForm = ({ onSubmit, error }) => {
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        password: Yup.string()
            .required('Required'),
        rememberMe: Yup.boolean(),
    });

    return (
        <Formik
            initialValues={{ email: '', password: '', rememberMe: false }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                onSubmit(values);
            }}
        >
            {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    <div>
                        <Field 
                            name="email" 
                            type="email" 
                            placeholder="Email" 
                        />
                        <ErrorMessage name="email" component="div" className={s.formSummaryError} />
                    </div>
                    <div>
                        <Field 
                            name="password" 
                            type="password" 
                            placeholder="Password" 
                        />
                        <ErrorMessage name="password" component="div" className={s.formSummaryError} />
                    </div>
                    <div>
                        <Field 
                            name="rememberMe" 
                            type="checkbox" 
                        /> 
                        remember me
                    </div>
                    {error && (
                        <div className={s.formSummaryError}>
                            {error}
                        </div>
                    )}
                    <div className={s.loginButton}>
                        <button type="submit">Login</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

const Login = ({ login, isAuth }) => {
    const onSubmit = (formData) => {
        const { email, password, rememberMe } = formData;
        login(email, password, rememberMe);
    };

    if (isAuth) {
        return <Navigate to="/profile" />;
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} />
        </div>
    );
}

const mapStateToProps = ({ auth }) => ({
    isAuth: auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);