import React, { useState } from 'react';

const Header = (props) => {
  const {count,setCount}=props;
  return (
    <div>
      <p>Count value:{count}</p>
      <h1>This is Header:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  );
};

export default Header;