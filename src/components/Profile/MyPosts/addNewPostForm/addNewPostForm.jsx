import { Field, reduxForm } from "redux-form";
import React from "react";
import { maxLengthCreator, required } from "../../../../utils/validators";

let maxLength30 = maxLengthCreator(30)

let AddNewPostForm = ({handleSubmit}) => {
    return <form onSubmit={ handleSubmit }>
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

export default AddNewPostForm;