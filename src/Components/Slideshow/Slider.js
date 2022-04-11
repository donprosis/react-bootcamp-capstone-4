/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import  "./Slider.css"
import { useFeaturedBanners } from "../../utils/hooks/useFeaturedBanners";
import Images from '../../assets/img/WizleineImages.json';
import ViewAll from'../ViewAll/ViewAll.js';
import BtnAcction from "../Footer/BtnAcction/buttonAction";

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
            <img src={resulta.data.main_image.url} width="35%"></img>
            </div>
            </div>
        )}
              
        );
            

        
        <BtnAcction featuredBanner={featuredBanners}/>
    </div>
    
    );
    
}