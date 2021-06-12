import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  const [users, setUsers] = useState([]);
  console.log(users);

  const getUsersData = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    console.log(users);
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <>
      <h1>Some Github users...</h1>
      <ul className='users'>
        {users.map((user) => {
          const {id, login, avatar_url, html_url } = user;
          return (
            <li key={id} >
              <img src={avatar_url} alt={login} />
              <div>
                <h3>{login}</h3>
                <a href={html_url} >Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );

}

export default UseEffectFetchData;