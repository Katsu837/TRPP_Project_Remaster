import React, { useState } from 'react';
import lionshop from "../image/lionshop.jpg"
import people from "../image/people.png"
import garbage from "../image/garbage.png"

const friends = [
  {
    id: 1,
    name: 'Иван Иванов',
    avatar: 'path/to/avatar1.jpg'
  },
  {
    id: 2,
    name: 'Петр Петров',
    avatar: 'path/to/avatar2.jpg'
  },
  {
    id: 3,
    name: 'Анна Сидорова',
    avatar: 'path/to/avatar3.jpg'
  },
  {
    id: 4,
    name: 'Мария Кузнецова',
    avatar: 'path/to/avatar4.jpg'
  },
  {
    id: 3,
    name: 'Анна Сидорова',
    avatar: 'path/to/avatar3.jpg'
  },
  {
    id: 3,
    name: 'Анна Сидорова',
    avatar: 'path/to/avatar3.jpg'
  },
  {
    id: 3,
    name: 'Анна Сидорова',
    avatar: 'path/to/avatar3.jpg'
  },
  {
    id: 3,
    name: 'Анна Сидорова',
    avatar: 'path/to/avatar3.jpg'
  }
];

const FriendList = () => {
  const [myFriends, setMyFriends] = useState(friends);

  const handleAddFriend = (friendId) => {
    const friendIndex = myFriends.findIndex((friend) => friend.id === friendId);
    if (friendIndex !== -1) {
      const updatedFriends = [...myFriends];
      updatedFriends[friendIndex] = { ...updatedFriends[friendIndex], added: true };
      setMyFriends(updatedFriends);
    }
  };

  return (
    <div>
      <div className="Listandbtn"><h2>Список друзей</h2><button className="somebtn1"><img className="peopleimg" src={people}  /></button></div>
    <div className="friends-list-container">
      <div className="friends-list">
        {myFriends.map((friend) => (
          <div key={friend.id} className="friend">
            <img className='Avatar' src={friend.avatar} alt="Avatar" />
            <p className="name">{friend.name}</p>
            {!friend.added ? (
              <button className='somebtn' onClick={() => handleAddFriend(friend.id)}><img className="peopleimg" src={garbage}  /></button>
            ) : (
              <p>Добавлен</p>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FriendList;
