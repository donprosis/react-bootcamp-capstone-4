/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Logo from '../assets/img/Logo.jpg'
import './Header.css'
import { BsCart3 } from "react-icons/bs";
const Header = () =>{
    return (
        <nav>
            <div className="Header" >
               <div align="center">
                   <div align="Left">
                    
                     <tr>
                         <td><img src={Logo} className="logocss"></img> </td>
                         <td><h2>WIZELINE E-comerce Reactbootcamp</h2></td>
                     </tr>
                   
                    
                    </div>
                     <input placeholder="Search" align="center" ></input><button> Search</button>
                     <button id="car">  <h3> <BsCart3 /></h3> </button>
                     </div>
                     <div>
                     </div>
                </div>
          
        </nav>
    )

}
export default Header;