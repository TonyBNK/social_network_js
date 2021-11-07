import React, {useEffect, useState} from "react";
import c from './ProfileStatus.module.scss';


const ProfileStatusWithHooks = React.memo((
    {
        status,
        updateMyStatus
    }
) => {
    const [editMode, setEditMode] = useState(false);
    const [profileStatus, setProfileStatus] = useState(status);

    useEffect(() => {
        setProfileStatus(status)
    }, [status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        updateMyStatus(profileStatus);
    }

    const updateStatusLocally = (e) => {
        setProfileStatus(e.currentTarget.value);
    }

    return (
        <div className={c.statusContainer}>
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
});

export default ProfileStatusWithHooks;