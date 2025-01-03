import React, { useState } from "react";
import { useEffect } from "react";

const ProfileStatusWithHooks = ({ status, updateStatus}) => {
    let [editMode, setEditMode] = useState(false);
    let [statusState, setStatusState] = useState(status);

    // useEffect сделает то же самое что и componentDidMount в классовом компоненте
    useEffect( () => {
        setStatusState(statusState);
    }, [statusState]) // [] в зависимостях - срабатывает при первом рендере

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(statusState);
    }

    const onStatusChange = (e) => {
        setStatusState( e.currentTarget.value );
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{status || "status not found"}</span>
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