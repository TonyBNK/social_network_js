import React, {useState} from "react";
import c from './ProfileStatus.module.css';


const ProfileStatusWithHooks = (
    {
        status,
        updateProfileStatus
    }
) => {
    const [editMode, setEditMode] = useState(false);
    const [profileStatus, setProfileStatus] = useState(status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        updateProfileStatus(profileStatus);
    }

    const updateStatusLocally = (e) => {
        setProfileStatus(e.currentTarget.value);
    }

    return (
        <div className={c.profileStatus}>
            {
                editMode
                    ? <div>
                        <input
                            value={profileStatus}
                            onBlur={deactivateEditMode}
                            autoFocus
                            onChange={updateStatusLocally}/>
                    </div>
                    : <div>
                            <span onDoubleClick={activateEditMode}>
                            {status}
                    </span>
                    </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;