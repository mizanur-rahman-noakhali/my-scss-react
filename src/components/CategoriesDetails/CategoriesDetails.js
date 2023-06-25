import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoriesDetails = (props) => {
  
const {name}=props.product;

  return (
    <div>
      <h4>This is Categories Details</h4>
      <h6>Selected Product :{name}</h6>
    </div>
  );
};

export default CategoriesDetails;