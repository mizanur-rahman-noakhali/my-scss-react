import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoriesDetails = () => {
  
const category=useContext(CategoryContext);

  return (
    <div>
      <h4>This is Categories Details</h4>
      <h6>Selected Category :{category}</h6>
    </div>
  );
};

export default CategoriesDetails;