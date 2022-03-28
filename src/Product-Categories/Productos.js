import React from "react";
import Productlist from "./ProductList.json";

const Products=()=>{
  
        return(
            <div>
                
                {Productlist.map(props=>{
                         
                    return(
                        
                            <div>
                            {props.results.map(resul=>
                            <div>
                                <div><img src={resul.data.mainimage.url
                                }width={resul.data.mainimage.dimensions.width} 
                                height={resul.data.mainimage.dimensions.width}></img>
                    
                                </div>
                               
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