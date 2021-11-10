import React from "react";
import PropTypes from "prop-types";
import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const { status, friendAvatar, friendName } = s;
  return (
    <>
      <span
        className={status}
        style={{ backgroundColor: isOnline ? "green" : "red" }}
      >
        {isOnline}
      </span>
      <img className={friendAvatar} src={avatar} alt={name} width="48" />
      <p className={friendName}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
