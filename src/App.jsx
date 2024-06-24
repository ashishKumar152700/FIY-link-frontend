import Maindiv from "./Maindiv.jsx";
import Dp from "./Dp.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import  Login  from "../src/Login.jsx";
import About from "./About.jsx";
import Admin from "./admin.jsx";
import Login1 from "./Login1.jsx";
import BioPage from "./BioPage.jsx";
import BioPage2 from "./Biopage2.jsx";
import Analytics from "./Analytics.jsx";
import Mainlogin from "./Mainlogin";
import Mainlogin2 from "./Mainlogin2";
import Preview from "./Previewphone.jsx";
import Payment from "./Payment.jsx";
import Page_1 from "./Apperance1.jsx";
import Api from "./Api.jsx";
import Home from "./Home.jsx";
import Caresoulslider from "./caresoul.jsx";
import Pricing2 from "./Pricing2.jsx";
import First from "../src/Home/First.jsx";
import Interview from "./interview.jsx";
import Reducer from "./Reducer.jsx";
import Signup from "./Rishi.jsx";


const App=()=>{

    return(
        <>
           

         <BrowserRouter>
      <Routes>

       {/* <Route path="/admin" element={<Maindiv/>}></Route> */}
       {/* <Route path="radhe" element={ <Admin/>}></Route> */}
       {/* <Route path="/registration" element={<Username/>}></Route> */}
       {/* <Route path="/login" element={<Login/>}></Route> */}
       {/* <Route path="/about" element={<About/>}></Route> */}
       <Route path="/signup" element={<Mainlogin/>}></Route>
       <Route path="/login" element={<Mainlogin2/>}></Route>
       <Route path="/admin" element={<BioPage2/>}></Route>
       <Route path="/reset" element={<Maindiv/>}></Route>
       <Route path="/apperance" element={<Page_1/>}></Route>
       
       <Route path="/anaytics" element={<Analytics/>}></Route>
       <Route path="/Payment" element={<Payment/>}></Route>
       <Route path="/biopage" element={<BioPage/>}></Route>
       {/* <Route path="/" element={<Home/>}></Route> */}
       <Route path="/radhe" element={<Caresoulslider/>}></Route>
       <Route path="/price" element={<Pricing2/>}></Route>
       <Route path="/" element={<First/>}></Route>
       <Route path="/gfg" element={<Interview/>}></Route>
       <Route path="/red" element={<Reducer/>}></Route>
       <Route path="/rishi" element={<Signup/>}></Route>






       <Route path="/:fname" element={ <Dp/>}></Route>
        </Routes>
     </BrowserRouter>  
     
     
         
               

             
            
         
          
              
              
        </>
    );
}
export default App;