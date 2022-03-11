import React from "react";
import Categories from "../ProductCategories.json";

const Sidebar=()=>{

    return(
       
        <div>
             {Categories.map(prop=>{
                 return(
                    
                    <div>
                        <table>
                   <th><h2><a href="">{prop.results[0].data.name}</a></h2></th>
                   <th><h2><a href="">{prop.results[1].data.name}</a></h2></th>
                   <th><h2><a href="">{prop.results[2].data.name}</a></h2></th>
                   <th><h2><a href="">{prop.results[3].data.name}</a></h2></th>
                   <th><h2><a href="">{prop.results[4].data.name}</a></h2></th>
                   </table>
                    
                    </div>
                    
                 )


             })}
           
     
        </div>
      
    )
}

export default Sidebar;