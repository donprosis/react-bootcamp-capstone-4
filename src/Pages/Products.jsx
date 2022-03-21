import React from "react";
import { useFeaturedProducts } from "../utils/hooks/UseFeaturedProducts.js";
import BtnAcction from "../Components/Footer/BtnAcction/buttonAction";



export const Products=()=>{
const {data:featuredProducts, isLoading: LoadingProducts}=useFeaturedProducts();
if(LoadingProducts) return <h2>Loading...</h2>
const resultas= featuredProducts.results;
console.log(resultas);
return(
<div>
    {resultas.map((resultades)=>
    <div key={resultades.id} >
        <h1>{resultades.data.name}</h1>
        <img src={resultades.data.mainimage.url} alt={resultades.data.mainimage.alt}></img>

    </div>
    )}



</div>

)


}