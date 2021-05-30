import React, { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    message: 'random message'
  });

  const changeMessage = () => {
    setPerson({ ...person, message: 'hello word' });
  };
  
  const { name, age, message } = person;

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>{message}</h4>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  )


};

export default UseStateObject;