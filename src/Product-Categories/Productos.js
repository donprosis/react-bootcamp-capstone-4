import React from "react";
import Productlist from "./ProductList.json";

const Products=()=>{
  
        return(
            <div>
                
                {Productlist.map(props=>{
                            <h1>hi</h1>
                    return(
                        
                            <div>
                            {props.results.map(resul=>
                            <div>
                                <div> <img src={resul.data.mainimage.url
                                }width={resul.data.mainimage.dimensions.width} 
                                height={resul.data.mainimage.dimensions.height}></img></div>
                               
                                <p >${resul.data.price}</p>
                                <p>{resul.data.name}</p>
                                </div>)}
                          
                            </div>

                    


                    )



                })}
            </div>
        )
                
}

export default Products;