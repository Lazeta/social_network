import React from "react";
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";
import userPhotoDefault from '../../../assets/images/profile-logo.png';

const ProfileInfo = ({status, updateStatus, profile}) => {
    // добавили проверки на существование объектов в props
    const smallPhoto = profile && profile.photos && profile.photos.small;
    // const largePhoto = profile.photos.large;

    console.log(smallPhoto);
    return (
        <div>
            <div className={s.descriptionBlock}>
                {smallPhoto ? <img src={smallPhoto} alt="my avatar" /> : <img src={userPhotoDefault} alt="my avatar" />}
                
                

                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;