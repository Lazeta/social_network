import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddNewPostForm = ({ onSubmit }) => {
    const validationSchema = Yup.object().shape({
        newPostText: Yup.string()
            .required('Required')
            .max(30, 'Must be 30 characters or less'),
    });

    return (
        // 1.1
        // Formik обрабатывает отправку формы и вызывает метод onSubmit, передавая в него
        // значения формы и объект, содержащий методы управления формой.
        // функция onSubmit принимает параметры values (содержащий введенный текст поста) и
        // объект с методами, включая resetForm.
        // on Submit вызывает функцию onAddPost приходящий из пропса MyPosts компонента передавая
        // значения формы, то есть объект с полем newPostText.
        // 1.9
        // вызывается resetForm, что очищает форму, возвращая его начальное значение (пустая строка).
        <Formik
            initialValues={{ newPostText: '' }}
            validationScheme={validationSchema}
            onSubmit={(values, { resetForm }) => {
                onSubmit(values); 
                resetForm();
            }}
        >
            {() => (
                <Form>
                    <div>
                        <Field name="newPostText" as="textarea" />
                        <ErrorMessage name="newPostText" component="div" />
                    </div>
                    <div>
                        <button type="submit">Add post</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default AddNewPostForm;