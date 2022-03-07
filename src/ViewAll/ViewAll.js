import React,{useState} from "react";

const ViewProducts= (props)=>{
    const [article,setTitle]=useState(props.article);
const ClickAction=()=>{
    console.log("This is the Product List Page");
};
 return(
    <div id="View">
    <button id="View" onClick={ClickAction}>View all products</button>
    </div>
 )
}
export default ViewProducts;