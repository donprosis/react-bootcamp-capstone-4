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
          </div>
        </div>
      );
    }
  }
  
  export default Bedbath;