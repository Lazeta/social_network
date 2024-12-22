import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({profile, status, updateStatus}) => {
    // work don't correct
    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} alt="my avatar"/>

                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;