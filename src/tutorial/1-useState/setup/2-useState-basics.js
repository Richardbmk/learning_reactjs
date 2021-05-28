import React, { useState } from 'react';

const UseStateBasics = () => {

  const [text, setText] = useState('random text');

  // const handleClick = () => {
  //   if (text === 'random text') {
  //     setText('hello word');
  //   } else {
  //     setText('random text');
  //   }
  // };

  const handleClick = () => {
    return text === 'random text' ? setText('hello word') : setText('random text')
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className='btn' onClick={handleClick} >
        Change me
      </button>
    </React.Fragment>
  );





}

export default UseStateBasics;