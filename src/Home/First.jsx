import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./First.css";
import Input from '@mui/material/Input';
import Second from "./Second";
import Third from "./Third";
import Pricing2 from "../../src/Pricing2";
import Home from "../Home";
import Caresoulslider from "../caresoul";
import Fourth from "./Fourth";
import ResponsiveAppBar from "../HomeNavbar";


function First() {
  const proceed = () => {};




  return (
    <>
    <ResponsiveAppBar/>
      <div className="first-home-com">
        <div id="background-home">
          <h1 className="home-heading">
            FIY-LINK <br /> <span className="home-page-heading"> Your <br /> All-in-One <br /> Link
            Solution! </span>
            <br />
            <br />  
         

          
{/* <form >   
    <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative" >
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          
        </div>
        <input type="search" id="claimyourfiyinput" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500   dark:placeholder-gray-400 dark:text-grey dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="/Claim Username" required
       
        />
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"id="claimyourfiy" >Claim Your Link</button>
    </div>
</form> */}


    

          </h1>
        </div>
      </div>

      <Second/>
      <Third/>
     


<div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

      <h1 className="discoverh1tag">Discover our top  
      
      
      <span className="services">services </span></h1>
      

      <div style={{display:'flex',justifyContent:'center',gapalignItems:'center',height:'100%',width:'100%',margin:'0',padding:'0',overflowX:'hidden'}}>
      <Caresoulslider/> 

      </div>
      </div>

      <div data-aos="zoom-in" >
        <Pricing2 />
      </div>

<Fourth/>

      
    </>
  );
}

export default First;
