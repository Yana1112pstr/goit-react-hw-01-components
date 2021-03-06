import React from "react";
import PropTypes from "prop-types";
import s from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  const { friendList, item } = s;
  return (
    <ul className={friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={item}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
