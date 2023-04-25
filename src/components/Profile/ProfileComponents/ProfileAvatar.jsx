import React, { useState } from 'react';
import '../../../styles/ProfileAvatar.css'

function ProfileAvatar({ imgUrl }) {
  const [image, setImage] = useState(imgUrl);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="avatar">
      <label htmlFor="avatar-input">
        <img src={image} className="avatar-image" />
      </label>
      <input
        id="avatar-input"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
    </div>
  );
}

export default ProfileAvatar;