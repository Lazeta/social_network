import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    // work don't correct
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src="https://idg.net.ua/blog/wp-content/uploads/hand-coding-700x325.jpg" alt="coding hands"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="my avatar"/>

                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;