import React,{Component} from "react";
import ProductList from "../../../Product-Categories/ProductCategories.json";





class Bedbath extends Component {
    constructor(props) {
      super(props);
      this.state = { checked: false };
      this.handleChange = this.handleChange.bind(this);
    
      
    }
  
    
  
    handleChange(checked) {
      this.setState({ checked });
      
    }
    render() {
        const resul= this.props.resul
      return (
        <div>
          <div  className="View">
          <span>
              
  
            {this.state.checked ? (
                
              <div id="View" >
                
                     <h1>{ProductList.map(props=>{
                            <h1>hi</h1>
                    return(
                        
                            <div>
                            {props.results.map(resul=> resul.tags.filter(resul=> resul=="").map(result=>

                           
                            <div>
                                
                                <div><img src={result.data.mainimage.url
                                }width={result.data.mainimage.dimensions.width} 
                                height={result.data.mainimage.dimensions.width}></img>
                     
                                </div>
                               
                                <p >${result.data.price}</p>
                                <p>{result.data.name}</p>
                                 
                                </div> ))}
                                <a onClick={() => this.handleChange(false)}>filtro en proceso 👷‍♂️ </a>
                            </div>

                    


                    )



                })}</h1>
                   
                  
             </div>
  
            ) : (
              <div id="View">
  
              <a  onClick={() => this.handleChange(true)}>bedbath</a>
  
              </div>
            )}
          </span>
          
          </div>
       
  
  
        </div>
      );
    }
  }
  
  export default Bedbath;