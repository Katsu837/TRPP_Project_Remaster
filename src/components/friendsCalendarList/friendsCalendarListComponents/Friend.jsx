import React from "react";

function Friend({ friend, onRemoveFriend, onOpenCalendar }) {
  const handleRemoveFriend = () => {
    onRemoveFriend(friend.id);
  };

  const handleOpenCalendar = () => {
    onOpenCalendar(friend);
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
    handleRemoveFriend();
  };

  return (
    <div className="friend" onContextMenu={handleContextMenu}>
      <img src={friend.avatar} alt={friend.name} />
      <div>
        <div>{friend.name}</div>
        <div>
          <button onClick={handleRemoveFriend}>Удалить</button>
          <button onClick={handleOpenCalendar}>Календарь</button>
        </div>
      </div>
    </div>
  );
}

export default Friend;
