import React, { useContext, useEffect, useState } from 'react';
import CategoriesDetails from '../CategoriesDetails/CategoriesDetails';
import { CategoryContext } from '../../App';

const allProducts=[
               {name:'Lenovo',category:'laptop'},
               {name:'Asus',category:'laptop'},
               {name:'Dell',category:'laptop'},
               {name:'Samsung',category:'mobile'},
               {name:'Nokia',category:'mobile'},
               {name:'Apple',category:'mobile'},
               {name:'canon',category:'camera'},
               {name:'Nokia',category:'camera'},
               {name:'sony',category:'camera'},
              ]


const Categories = () => {
 const [category,setCategory]=useContext(CategoryContext);

const [products,setProducts]=useState([]);
        
       useEffect(()=>{
        console.log({category})
          const matchProducts=allProducts.filter(product=>product.category.toLowerCase()===category.toLowerCase());
        setProducts(matchProducts);

       },[category])
  return (
    <div>
      <h2>This is Categories:{category}</h2>
      {
      products.map(product=> <CategoriesDetails product={product}></CategoriesDetails>)  
}   
    </div>
  );
};

export default Categories;