import React from "react";
import '../../../styles/ProfileNickname.css'
function ProfileNickname({ name, tag }) {
  return (
    <div className="profile-nickname">
      <div className="profile-name">{name}</div>
      <div className="profile-tag">{tag}</div>
    </div>
  );
}

export default ProfileNickname;
