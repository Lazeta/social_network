import React from "react";
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";
import userPhoto from '../../../assets/images/profile-logo.png';

const ProfileInfo = (props) => {
    const smallPhoto = props.profile.photos

    // console.log(smallPhoto);
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={smallPhoto || userPhoto} alt="my avatar"/>

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;