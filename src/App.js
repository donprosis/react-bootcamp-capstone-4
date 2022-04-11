/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Catalogue} from './Pages/Catalogue';
import {Kitchen} from "./Pages/SidebarPages/Kitchen.jsx";
import { Lighthing } from './Pages/SidebarPages/Lighthing.jsx';
import { Bedbath } from './Pages/SidebarPages/bed&bath';
import {Home} from "./Pages/Home.jsx";
import { Products } from './Pages/Products.jsx';
import { Furniture } from './Pages/SidebarPages/Furniture.jsx';
import { Decorate } from './Pages/SidebarPages/Decorate&Organize.jsx';
import Footer from './Components/Footer/Footer.js';
import BtnAcction from "./Components/Footer/BtnAcction/buttonAction.js";
import Sidebar from './Components/Sidebar/Sidebar.js';
import Header from './Components/Header/Header.js';
import {Cart} from "./Pages/Cart.jsx";
import {Search} from "./Pages/Search.jsx";
function App() {
  return (
    <div>
  
    <Header/>
    <Sidebar/>
    <main >
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/Catalogue'  element={<Catalogue/>}/>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/Kitchen' element={<Kitchen/>}/>
          <Route path='/Lighting' element={<Lighthing/>}/>
          <Route path='/Bed&Bath' element={<Bedbath/>}/>
          <Route path='/Furniture' element={<Furniture/>}/>
          <Route path='/Decorate&Organize' element={<Decorate/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Search' element={<Search/>}/>
          </Routes>
      </Router>
      <BtnAcction></BtnAcction>
  </main>
      <Footer/>
    </div>
  );
}

export default App;
