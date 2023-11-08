import React, { useState } from 'react';

function SeeFollowers({ followers }) {
 const [showFollowers, setShowFollowers] = useState(false);

 const handleClick = () => {
    setShowFollowers(!showFollowers);
 };

 return (
    <div>
      <button onClick={handleClick}>See Followers</button>
      {showFollowers && (
        <ul>
          {followers.map((follower) => (
            <li key={follower.login}>
              <img src={follower.avatar_url} alt="Avatar" />
              <a href={`https://github.com/${follower.login}`} target="_blank" rel="noreferrer">
                {follower.login}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
 );
}

export default SeeFollowers;