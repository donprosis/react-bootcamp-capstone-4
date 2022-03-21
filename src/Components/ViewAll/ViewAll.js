import React,{useState} from "react";

const ViewProducts= (props)=>{
    const [title,setTitle]=useState(props.article);
const ClickAction=()=>{
    setTitle("This is the Product List Page");
    
};
 return(
    <div id="View">
           <h1>
                 {title} 
             </h1> 
    <button id="View" onClick={ClickAction}>View all products</button>
    </div>
 )
}
export default ViewProducts;