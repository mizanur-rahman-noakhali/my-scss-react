import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
  const [category,setCategory]=useContext(CategoryContext);
  
  return (
    <div>
      <p>Count value:{category}</p>
      <h1>This is Header:{category}</h1>
      <button onClick={()=>setCategory(category+1)}>Increment</button>
    </div>
  );
};

export default Header;