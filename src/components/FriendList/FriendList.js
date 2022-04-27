import React from 'react';
import PropTypes from 'prop-types';
import './friendList.css';

export default function FriendList({ friends }) {
  return (
    <div className="friends">
      <ul className="friend-list">
        {friends.map(friend => (
          <li className="friend-item" key={friend.id}>
            <span className={friend.isOnline ? 'online' : 'offline'}></span>
            <img
              className="friend-avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="friend-name">{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
