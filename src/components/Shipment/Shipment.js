import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
  const [category,setCategory]=useContext(CategoryContext);
  return (
    <div>
      <h1>This is Shipment:{category}</h1>
      <button onClick={()=> setCategory(category+1)}>Increment of shipment</button>
    </div>
  );
};

export default Shipment;