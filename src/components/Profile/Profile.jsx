import React from 'react';
import ProfileAvatar from './ProfileComponents/ProfileAvatar';
import ProfileNickname from './ProfileComponents/ProfileNickname';
import ProfileNextEvent from './ProfileComponents/ProfileNextEvent';
import ProfileNotification from './ProfileComponents/ProfileNotification';

const Profile = () => {
  return (
    <div className='profile'>
      <div className="profile-block">
        <div className = "profile-header">
          <ProfileAvatar imgUrl="default-avatar.jpg" />
          <ProfileNickname name="NameExample" tag="#1234" />
        </div>
        <ProfileNextEvent nextEventName={"Поход к врачу"} nextEventTime={"14 00"} nextEventLocation={"Адрес Больницы"} />
        <ProfileNotification />
      </div>
    </div>
  );
}

export default Profile;