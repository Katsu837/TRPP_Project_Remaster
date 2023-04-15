import React, { useState } from "react";

function FriendSearch({ onAddFriend }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddFriend = () => {
    onAddFriend({
      id: Math.floor(Math.random() * 1000),
      name: "Новый друг",
      avatar: "https://via.placeholder.com/150",
    });
  };

  return (
    <div>
      <input className="Frsearch" type="text" placeholder="Поиск друзей" onChange={handleSearch} />
      <button className="Frsearchbtn" onClick={handleAddFriend}>Добавить друга</button>
    </div>
  );
}

export default FriendSearch;
