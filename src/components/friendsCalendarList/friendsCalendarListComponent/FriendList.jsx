import React from "react";
import Friend from "./Friend";

function FriendsList({ friends, onRemoveFriend, onOpenCalendar }) {
  const handleRemoveFriend = (friendId) => {
    onRemoveFriend(friendId);
  };

  const handleOpenCalendar = (friend) => {
    onOpenCalendar(friend);
  };

  const handleContextMenu = (event, friend) => {
    event.preventDefault();
    // открыть контекстное меню для удаления друга
  };

  return (
    <div>
      <h2 className="Listname">Список друзей:</h2>
      {friends && friends.length > 0 ? (
        friends.map((friend) => (
          <div
            key={friend.id}
            className="friend"
            onContextMenu={(event) => handleContextMenu(event, friend)}
          >
            <Friend
              friend={friend}
              onRemoveFriend={handleRemoveFriend}
              onOpenCalendar={handleOpenCalendar}
            />
          </div>
        ))
      ) : (
        <div className="Friends">
        <div className="Friendprof">
          <div className="Circle"></div>
        <p className="Friendname">Друг для примера</p>

        </div>

        <div className="Friendprof"><div className="Circle"></div>
        <p className="Friendname">Друг для примера</p></div>
        <div className="Friendprof"><div className="Circle"></div>
        <p className="Friendname">Друг для примера</p></div>
        <div className="Friendprof"><div className="Circle"></div>
        <p className="Friendname">Друг для примера</p></div>
        </div>
      )}
    </div>
  );
}

export default FriendsList;
