import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// 1
const AddMessageForm = ({ onSubmit }) => {
    // 7
    const validationSchema = Yup.object().shape({
        newMessageBody: Yup.string()
            .required('Required')
            .max(100, 'Must be 100 characters or less'),
    });

    return (
        // 2
        <Formik
            // 6
            initialValues={{ newMessageBody: '' }}
            validationSchema={validationSchema}
            // 3
            onSubmit={(values, { resetForm }) => {
                onSubmit(values); 
                // 4
                resetForm();
            }}
        >
            {() => (
                <Form>
                    <div>
                        <Field name="newMessageBody" as="textarea" placeholder="Enter your message" />
                        {/* 5 */}
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

// 1 форма добавления сообщения в диалог, пользователь может ввести новое сообщение.
// 2 использует библиотеку Formik для управления состоянием формы и проверки данных.
// 3 Когда пользователь отправляет форму, вызывается функция onSubmit, которая передает 
//   значения формы (новое сообщение) в родительский компонент.
// 4 Функция resetForm очищает форму, возвращая ее в начальное состояние.
// 5 При отображении ошибок валидации используется компонент ErrorMessage из библиотеки Formik.
// 6 Инициализирует начальное состояние формы с пустой строкой.
// 7 Создает схему валидации данных формы с помощью библиотеки Yup.