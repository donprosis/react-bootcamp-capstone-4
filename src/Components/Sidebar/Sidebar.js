import React from "react";
import Categories from "../../Product-Categories/ProductCategories.json";
import Bedbath from "./sidebarcategories/bedbath.js";

 

const Sidebar=()=>{

function bedbath(){
 
}


    return(
       
        <div>
             {Categories.map(prop=>{
                 return(
                    
                    <div><h2><a href="/Catalogue">Catalogue</a></h2>
                    <h2><a href="/Products">Products</a></h2>
                        <table> 
                            
                   <th><h2><a href="/Bed&Bath">{prop.results[0].data.name}<img src={prop.results[0].data.main_image.url}/></a></h2></th>
                   <th><h2><a href="Lighting">{prop.results[1].data.name} <img src={prop.results[1].data.main_image.url}/></a></h2></th>
                   <th><h2><a href="Kitchen">{prop.results[2].data.name} <img src={prop.results[2].data.main_image.url}/></a></h2></th>
                   <th><h2><a href="Furniture">{prop.results[3].data.name} <img src={prop.results[3].data.main_image.url}/></a></h2></th>
                   <th><h2><a href="Decorate&Organize">{prop.results[4].data.name } <img src={prop.results[4].data.main_image.url}/></a></h2></th>
                   </table>
                     <Bedbath></Bedbath>
                    </div>
                    
                 )


             })}
           
     
        </div>
      
    )
}

export default Sidebar;