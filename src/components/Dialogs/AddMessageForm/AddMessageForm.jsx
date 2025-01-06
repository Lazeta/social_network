import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddMessageForm = ({ onSubmit }) => {
    const validationSchema = Yup.object().shape({
        newMessageBody: Yup.string()
            .required('Required')
            .max(50, 'Must be 50 characters or less'),
    });

    return (
        <Formik
            initialValues={{ newMessageBody: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                onSubmit(values); 
                resetForm();
            }}
        >
            {() => (
                <Form>
                    <div>
                        <Field name="newMessageBody" as="textarea" placeholder="Enter your message" />
                        <ErrorMessage name="newMessageBody" component="div" style={{ color: 'red' }} />
                    </div>
                    <div>
                        <button type="submit">Send</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default AddMessageForm;