import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState(''); // Empty string is a falsy value
  const [isError, setIsError] = useState(false);
  const firstValue = text || 'hello world'; // must be falsy to return the second value, if not return the first value
  const secondValue = text && 'hello world'; // must be truthy to return the second value

  return (
    <>
      <h1>{firstValue}</h1>

      <h1>value : {secondValue}</h1>

      {/* {if(){console.log('hello world')}} */}

      <h1>{text || 'jhon doe'}</h1>

      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>

      {isError && <h1>Error...</h1>}
      {!isError && <h1>Error...</h1>}

      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
