import { Field, reduxForm } from "redux-form";
import React, { useState, useEffect } from "react";
import { maxLengthCreator, required } from "../../../../utils/validators";

let maxLength30 = maxLengthCreator(30);

const AddNewPostForm = ({ handleSubmit, someProp }) => {
    const [prevSomeProp, setPrevSomeProp] = useState(null);
    const [newPostText, setNewPostText] = useState('');

    useEffect(() => {
        if (someProp !== prevSomeProp) {
            setPrevSomeProp(someProp);
            // Вы можете выполнить здесь любые действия при изменении пропса someProp
        }
    }, [someProp, prevSomeProp]);

    const handleBlur = () => {
        if (!newPostText.trim()) {
            setNewPostText('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    component={'textarea'}
                    name={'newPostText'}
                    validate={[required, maxLength30]}
                    onBlur={handleBlur}
                    onChange={(e) => setNewPostText(e.target.value)}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

export default reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);