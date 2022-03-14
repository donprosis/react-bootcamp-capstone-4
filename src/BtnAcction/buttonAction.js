import React, { Component } from "react";
import Slider from '../Slideshow/Slider.js';
import  "../Slideshow/Slider.css";
import Products from "../Product-Categories/Productos";
//aplicar cambios aqui hacerlo en funcional componnent 
class BtnAcction extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);

    
  }

  

  handleChange(checked) {
    this.setState({ checked });
    
  }
  render() {
    return (
      <div>
        <div  className="View">
        <span>
            

          {this.state.checked ? (
            <div id="View" >
              
                   <h1>This is the Product List Page</h1>
                   <Products></Products>
                
           </div>

          ) : (
            <div id="View"><Slider></Slider>

            <button onClick={() => this.handleChange(true)}>View all Articles</button>

            </div>
          )}
        </span>
        
        </div>
     


      </div>
    );
  }
}

export default BtnAcction;