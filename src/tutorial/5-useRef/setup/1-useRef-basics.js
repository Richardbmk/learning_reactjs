import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  useEffect(() => {
    console.log(refContainer.current);
    console.log(refContainer.current.focus());
    refContainer.current.focus();
  });

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

export default UseRefBasics;