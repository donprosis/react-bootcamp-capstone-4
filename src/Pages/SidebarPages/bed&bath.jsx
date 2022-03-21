import React from "react";
import { useFeaturedCatalogue } from "../../utils/hooks/useFeaturedCatalogue";

export const Bedbath =()=>{
    const{data:featuredCatalogue, isLoading: LoadingProducts}=useFeaturedCatalogue();
    if(LoadingProducts)return <h2>Loading ...</h2>
    const P_results=featuredCatalogue.results;
    
    return(
    <div>
    {P_results.filter(result=>result.data.category.slug.includes("bed--bath")).map(result=>
    <div key={result.id}>
    <hr/>
    
        <h1>{result.data.name}</h1>
        <img alt src={result.data.mainimage.url}></img>
        <h2>{result.data.category.slug}</h2>
            <h2>Description: </h2>
            <h3 >{result.data.short_description} </h3>
        <h2> in Stock: {result.data.stock}</h2>
        <h2>Price: ${result.data.price}</h2>
        <button >add to the car</button>
        </div>
    
    )}
    </div>
    
    )
    }