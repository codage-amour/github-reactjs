import React, { useState } from 'react';
import './SeeFollowers.css';

function SeeFollowing({ following }) {
  const [visibleFollowing, setVisibleFollowing] = useState(5);

  const showMoreFollowing = () => {
    setVisibleFollowing((prevVisibleFollowing) => prevVisibleFollowing + 5);
  };

  return (
    <div className='seefollow'>
      {following.length > 0 && (
        <>
          <ul>
            {following.slice(0, visibleFollowing).map((following) => (
              <li key={following.login}>
                <div>
                  <img className='avtar' src={following.avatar_url} alt={`${following.login}'s avatar`} /><br />
                  <a href={`https://github.com/${following.login}`} target="_blank" rel="noreferrer">
                    {following.login}
                  </a>
                </div>
              </li>
            ))}
          </ul>
          {visibleFollowing < following.length && (
            <button className='showmore' onClick={showMoreFollowing}>Show More</button>
          )}
        </>
      )}
    </div>
  );
}

export default SeeFollowing;