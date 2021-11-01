import React from "react";
import PropTypes from "prop-types";

function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map((friend) => (
        <li class="item" key={friend.id}>
          <span class="status">{friend.isOnline}</span>
          <img
            class="avatar"
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p class="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.defaultProps = {
  avatar: "https://xn----7sbbg3ahdg9anmfnl4d2c.xn--p1ai/theme/img/noavatar.png",
  name: "User",
  isOnline: false,
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
