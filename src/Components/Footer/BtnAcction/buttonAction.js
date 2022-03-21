import React, { useState } from "react";
import Slider from '../../Slideshow/Slider.js';
import  "../../Slideshow/Slider.css";
import Products from "../../../Product-Categories/Productos.js";
//aplicar cambios aqui hacerlo en funcional componnent 
export const BtnAcction=({featuredBanners})=>{

console.log(featuredBanners);
 
  const [show, setShow] = useState(true);

  return (
    <div className="View">
     

      {show ? (
         <div id="View" >  
      
           <button onClick={() => {setShow(!show);}}>
        View all Articles
      </button>
         </div>
        ) : (
       <div id="View">
        <h1>This is the Product List Page</h1>
       <Products></Products>
         </div>
      )}
    </div>
  );
};
export default BtnAcction;