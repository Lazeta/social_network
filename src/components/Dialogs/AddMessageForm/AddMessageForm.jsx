import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators";
import { Textarea } from "../../common/FormsControls/FormControls";
import { useEffect } from "react";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    useEffect(() => {
        // Place your data fetching or side effects code here
        // This will run after each render
    }, [/* dependencies */]);

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field 
                    component={Textarea} 
                    name="newMessageBody"
                    placeholder="Enter your message" 
                    validate={[required, maxLength50]}
                />
            </div>
            <div>
                <button type="submit">Send</button>
            </div>
        </form>
    );
}

export default reduxForm({ form: 'dialog-add-message-form'})(AddMessageForm);