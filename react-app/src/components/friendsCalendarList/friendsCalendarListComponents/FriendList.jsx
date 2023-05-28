import React, { useState } from 'react';
import people from "../../image/people.png"
import garbage from "../../image/garbage.png"
import dog from "../../image/dog.jpg"
import duck from "../../image/duck.jpg"
import doghair from "../../image/doghair.jpg"
import japan from "../../image/japan.jpg"
import smile from "../../image/smile.jpg"
import tiger from "../../image/tiger.jpg"
import peng from "../../image/peng.jpg"
import man from "../../image/man.jpg"


const friends = [
  {
    id: 1,
    name: 'Иван Иванов',
    avatar: dog
  },
  {
    id: 2,
    name: 'Петр Петров',
    avatar: duck
  },
  {
    id: 3,
    name: 'Чат футболистов',
    avatar: doghair
  },
  {
    id: 4,
    name: 'Мария Кузнецова',
    avatar: japan
  },
  {
    id: 5,
    name: 'Максим Цвец',
    avatar: smile
  },
  {
    id: 6,
    name: 'Андрей Петров',
    avatar: tiger
  },
  {
    id: 7,
    name: 'Михаил Галустян',
    avatar: peng
  },
  {
    id: 8,
    name: 'Орехов Дмитрий',
    avatar: man
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
          <div key={friend.id} className="friend" tabIndex={0}>
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
