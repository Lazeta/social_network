import React from "react";
import { Field } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return <Form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name="newMessageBody" 
            placeholder="Enter your message" 
            validate={[required, maxLength50]}/>
        </div>
        <div><button>Send</button></div>
    </Form>
}

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm);