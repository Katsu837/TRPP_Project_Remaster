import React, { useState } from "react";
import loop from "../image/loop.png"
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
    <div className="Frsearch">
      <input className="searchinput" type="text" placeholder="Поиск друга"/>
      <button className="searschbtn"><img className="loopimg" src={loop}/></button>
    </div>
  );
}

export default FriendSearch;
