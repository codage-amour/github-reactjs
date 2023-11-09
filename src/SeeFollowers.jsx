import React, { useState } from 'react';
import './SeeFollowers.css';

function SeeFollowers({ followers }) {
  const [visibleFollowers, setVisibleFollowers] = useState(5);

  const showMoreFollowers = () => {
    setVisibleFollowers((prevVisibleFollowers) => prevVisibleFollowers + 5);
  };

  return (
    <div className='seefollow'>
      {followers.length > 0 && (
        <>
          <ul>
            {followers.slice(0, visibleFollowers).map((follower) => (
              <li key={follower.login}>
                <div>
                  <img className='avtar' src={follower.avatar_url} alt={`${follower.login}'s avatar`} /><br />
                  <a href={`https://github.com/${follower.login}`} target="_blank" rel="noreferrer">
                    {follower.login}
                  </a>
                </div>
              </li>
            ))}
          </ul>
          {visibleFollowers < followers.length && (
            <button className='showmore' onClick={showMoreFollowers}>Show More</button>
          )}
        </>
      )}
    </div>
  );
}

export default SeeFollowers;