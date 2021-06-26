import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Questions = (question) => {

  const { title, info } = question;

  const [showInfo, setShowInfo] = useState(false);



  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button button='btn' onClick={() => setShowInfo(!showInfo)}>
          { showInfo ? <AiOutlineMinus /> : <AiOutlinePlus /> }
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
}

export default Questions;