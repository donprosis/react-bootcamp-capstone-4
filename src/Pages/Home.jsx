import React from "react";
import { useFeaturedBanners } from "../utils/hooks/useFeaturedBanners";
import BtnAcction from "../Components/Footer/BtnAcction/buttonAction.js";
import Sliders from "../Components/Slideshow/Slider";
export  const Home =() =>{
const { data: featuredBanners, isLoading: LoadingBanners}=useFeaturedBanners();
if(LoadingBanners) return <h2>Loading ...</h2> 
const results =featuredBanners.results;
return(
    <div >
        {results.map((resulta)=>
       
        <div key={resulta.id} className="posts">
            <h1>{resulta.data.name}</h1>
            <div >
            <img src={resulta.data.main_image.url}  width="50%" >
            </img>
            </div>
            </div>
        )}
              
        
            

        
        <BtnAcction featuredBanner={featuredBanners}/>
    </div>
    
    );  
}