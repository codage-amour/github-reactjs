import React, { useState } from 'react';
import axios from 'axios';
import SeeFollowers from './SeeFollowers';
import './data.scss';
import './Data.css';

function Data() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [showFollowers, setShowFollowers] = useState(false);

  const fetchGitHubData = async () => {
    setLoading(true);

    try {
      const userResponse = await axios.get(`https://api.github.com/users/${username}`);
      const userData = userResponse.data;

      const followersResponse = await axios.get(`https://api.github.com/users/${username}/followers`);
      const followersData = followersResponse.data;

      setUserData(userData);
      setFollowers(followersData);
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleFollowers = () => {
    setShowFollowers(!showFollowers);
  };

  return (
    <div>
      <div className='searchdiv'>
        <h1>Enter Username</h1>
        <form>
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </form>
        <button className='search' onClick={fetchGitHubData}>
          Search
        </button>
      </div>
      <div className='loading'>
        {loading && (
          <div className='cat-animation'>
            <div className='cat'>
              <div className='ear ear--left'></div>
              <div className='ear ear--right'></div>
              <div className='face'>
                <div className='eye eye--left'>
                  <div className='eye-pupil'></div>
                </div>
                <div className='eye eye--right'>
                  <div className='eye-pupil'></div>
                </div>
                <div className='muzzle'></div>
              </div>
            </div>
          </div>
        )}
      </div>
      {userData && (
        <div className='all'>
          <span className='user'>{userData.name || userData.login}</span>
          <img className='avtar' src={userData.avatar_url} alt='User avatar' />
          <p>{userData.bio || 'No bio available'}</p>
          <p>Location: {userData.location || 'Not specified'}</p>
          <p>Created At: {new Date(userData.created_at).toLocaleDateString()}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <p>Public Gists: {userData.public_gists}</p>
          <p>Following: {userData.following}</p>
          <p>Followers: {userData.followers}</p>
          <button className='see' onClick={toggleFollowers}>
            See Followers
          </button>
          {showFollowers && <SeeFollowers followers={followers} />}
        </div>
      )}
    </div>
  );
}

export default Data;