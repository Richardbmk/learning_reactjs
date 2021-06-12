import React, {useState, useEffect } from 'react';

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  // console.log(size);

  const checkSize = () =>{
    setSize(window.innerWidth);
  }

  useEffect(() => {
    console.log('useEffect is running...');
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  console.log('render');

  return (
    <> 
      <h1>WINDOW SIZE</h1>
      <h2>{size}</h2>
    </>
  );

}

export default UseEffectCleanup;