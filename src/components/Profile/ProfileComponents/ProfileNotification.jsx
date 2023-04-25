import React, { useState } from 'react';
import PropTypes from "prop-types";
import iconNotification from "../../image/Notification.png"
import "../../../styles/ProfileNotification.css"
import ProfileNextEvent from "./ProfileNextEvent";
import Modal from "react-modal";

function ProfileNotification() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal} className='notification-button'>
        <img src = {iconNotification} className='notification-icon'/>
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal} className = "notification-window">
        <div className='notification-text'>
        <h2>Список уведомлений</h2>
        <p>Павел отправил Вам заявку в друзья</p>
        <p>Дима отправил Вам заявку в друзья</p>
        <p>Лев отправил Вам заявку в друзья</p>
        <p>Максим отправил Вам заявку в друзья</p>
        <p>Никита отправил Вам заявку в друзья</p>
        <button onClick={handleCloseModal}>Закрыть</button>
        </div>
      </Modal>
    </div>
  );
}

export default ProfileNotification;