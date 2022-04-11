/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Logo from '../../assets/img/Logo.jpg';
import './Header.css';
import { BsCart3 } from "react-icons/bs";
import { BrowserRouter, Link, Route,useSearchParams } from "react-router-dom";



const Header = () =>{
  let[inputValue,setInputValue]=useState("")
  console.log(inputValue);
  
  const buttonsearch =(event)=>{
      event.preventDefault();
  alert(inputValue);
  
  }
  
  
  
      return (
          <nav>
              <div className="Header" >
                 <div align="center">
                     <div align="Left">
                          <a href="/"> <div id="logocss"> <img src={Logo}   className="logocss"></img> </div></a>
                          <h2>WIZELINE E-comerce Reactbootcamp</h2>
                      </div>
                  <input type="text" 
                      placeholder="Search" 
                      align="center" 
                      id="search"
                      value={inputValue}
                      onChange={(event)=>setInputValue(event.target.value)}/>
                  <a href="/Search"><input 
                      type="button"  
                      value="Search" 
                      /></a>
                  <a href="/Cart"><button id="cart">  <h3> <BsCart3 /></h3> </button></a>
                      </div>
              </div>
          </nav>
      )
  
  }
  
  
   
  
  export default Header;