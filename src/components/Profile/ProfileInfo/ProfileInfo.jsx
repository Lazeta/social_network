import React from "react";
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";
import userPhoto from '../../../assets/images/profile-logo.png';

const ProfileInfo = (props) => {

    console.log(props.profile);
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || props.profile.photos.small || userPhoto}  alt="my avatar"/>

                {/* <ProfileStatus status={props.status} updateStatus={props.updateStatus}/> */}
            </div>
        </div>
    )
}

export default ProfileInfo;