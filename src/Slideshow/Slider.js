/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import  "./Slider.css"
import Images from '../assets/img/WizleineImages.json';
import ViewAll from'../ViewAll/ViewAll.js'
const Sliders=() =>{


    return(
        
        <div>
            <div className='posts'>
          {Images.map(post=>{
            return(
              <>
            
              <ul className="slider">
                <li  id="img1Slider"><img src={post.results[0].data.main_image.url}></img></li>
                <li id="img2Slider"><img src={post.results[1].data.main_image.url}></img></li>
                <li id="img3Slider"><img src={post.results[2].data.main_image.url}></img></li>
               
                
            </ul>
            <ul class="menu">
                 <li>
                     <a href="#img1Slider">1</a>
                </li>
                <li>
                     <a href="#img2Slider">2</a>
                </li>
                <li>
                     <a href="#img3Slider">3</a>
                </li>
     
            </ul>
              </>
            )
          })} 
          </div>
          <ViewAll></ViewAll>
              
        </div>
    )
}

export default Sliders; 