import React, { useState } from "react";
import { useEffect } from "react";

const ProfileStatusWithHooks = ({ status, updateStatus}) => {
    let [editMode, setEditMode] = useState(false);
    let [statusState, setStatusState] = useState(status);

    // 2
    useEffect( () => {
        setStatusState(statusState);
    }, [statusState]) // [] в зависимостях - срабатывает при первом рендере

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        // 1
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
                    <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={statusState} />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;

// 1 Ну да, статус же не функция, а мы ему значение передаём, нужно добавить 
//   возможность принимать значение в функции и обновлять статус
// 2 useEffect сделает то же самое что и componentDidMount в классовом компоненте