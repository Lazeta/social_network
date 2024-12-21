import { Field, reduxForm } from "redux-form";
import React from "react";

let maxLength30 = maxLengthCreator(30)

const AddNewPostForm = (props) => {
    return <form onSubmit={ props.handleSubmit }>
        <div>
            <Field component={'textarea'} name={'newPostText'} 
            validate={[required, maxLength30]} />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

AddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)