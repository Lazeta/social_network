import React, { useState } from "react";
import { useEffect } from "react";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(true);
    let [status, setStatus] = useState(props.status);

    // useEffect сделает то же самое что и componentDidMount в классовом компоненте
    useEffect( () => {
        setStatus(props.status);
    }, [props.status]) // [] в зависимостях - срабатывает при первом рендере

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus( e.currentTarget.value );
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "status not found"}</span>
                </div>}
            {editMode &&
                <div>
                    <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status} />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;