import React, { useContext } from 'react';
import ProfileAvatar from './ProfileComponents/ProfileAvatar';
import ProfileNickname from './ProfileComponents/ProfileNickname';
import ProfileNextEvent from './ProfileComponents/ProfileNextEvent';
import ProfileNotification from './ProfileComponents/ProfileNotification';
import { UserContext } from '../context/UserContext';



const Profile = () => {

  const {userAuth, setUserAuth} = useContext(UserContext)
  console.log(userAuth)

  return (
    <div className='profile'>
      <div className="profile-block">
        <div className = "profile-header">
          <ProfileAvatar imgUrl="default-avatar.jpg" />
          <ProfileNickname name={userAuth.name} tag="#1234" />
        </div>
        <ProfileNextEvent nextEventName={"Поход в поликлинику"} nextEventTime={"7:00"} nextEventLocation={"Ломоносовский пр., 8"} />
        <ProfileNotification />
      </div>
    </div>
  );
}

export default Profile;