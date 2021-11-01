import React from "react";
import PropTypes from "prop-types";

function Profile({ user }) {
  const {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;

  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt={name} class="avatar" />
        <p class="name">{name}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.defaultProps = {
  avatar: "https://xn----7sbbg3ahdg9anmfnl4d2c.xn--p1ai/theme/img/noavatar.png",
  followers: 0,
  views: 0,
  likes: 0,
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
  }),
};

export default Profile;
