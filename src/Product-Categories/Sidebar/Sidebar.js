import React from "react";
import Categories from "../ProductCategories.json";
import Bedbath from "./sidebarcategories/bedbath.js";

 

const Sidebar=()=>{

function bedbath(){
 
}


    return(
       
        <div>
             {Categories.map(prop=>{
                 return(
                    
                    <div>
                        <table>
                   <th><h2><a href="/Bed&Bath">{prop.results[0].data.name}</a></h2></th>
                   <th><h2><a href="Lighting">{prop.results[1].data.name}</a></h2></th>
                   <th><h2><a href="Kitchen">{prop.results[2].data.name}</a></h2></th>
                   <th><h2><a href="Furniture">{prop.results[3].data.name}</a></h2></th>
                   <th><h2><a href="Decorate&Orginze">{prop.results[4].data.name}</a></h2></th>
                   </table>
                     <Bedbath></Bedbath>
                    </div>
                    
                 )


             })}
           
     
        </div>
      
    )
}

export default Sidebar;