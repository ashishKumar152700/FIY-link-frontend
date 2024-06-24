import "./Main.css";
import { FaBars  } from "react-icons/fa";
import {AiFillHome} from "react-icons/ai";
import {FcAbout} from "react-icons/fc";
import {MdPayments} from "react-icons/md";
import {BiLogOut} from "react-icons/bi";
import { CSSTransition } from 'react-transition-group';
import React, { useState } from 'react';

const Main=()=>{
    const [color, setColor] = useState('white');

    const changeColor = (newColor) => {
        setColor(newColor);
      };

      const toggleNavbar = () => {
        setIsOpen(!isOpen);
      };

    return(
        <>
        <div className="main-container">
            <div className="first" style={{backgroundColor:"red"}}>
            <nav className="navbar open">
    <div className="menu-toggle" onClick={toggleNavbar}>
      <FaBars />
    </div>
    <CSSTransition in={true} classNames="navbar-links" timeout={300} unmountOnExit>
        <ul className="navbar-links">
          <li>
            <a href="#">
               <AiFillHome/> 
            </a>
          </li>
          <li>
            <a href="#">
            <FcAbout/>
            </a>
          </li>
          <li>
            <a href="#">
              <MdPayments/>
            </a>
          </li>
          <li>
            <a href="#">
              <BiLogOut />
            </a>
          </li>
        </ul>
        
      </CSSTransition> <br /> <br />
     <h6 className='nav-btn' > <b>Change Phone color </b></h6>

     <div className="button-nav2">

      <input type="button" className="color-btn" onClick={() => changeColor('red')} value="Red" />  <br /> <br />
      
      <input type="button" className="color-btn" onClick={() => changeColor('Green')} value="Green"  />  <br /> <br />
      <input type="button" className="color-btn" onClick={() => changeColor('Yellow')} value="Yellow" />  <br /> <br />
      <input type="button" className="color-btn" onClick={() => changeColor('white')} value="white" />  <br /> <br />
      <input type="button" className="color-btn" onClick={() => changeColor('Blue')} value="Blue" /> <br /> <br />
      <input type="button" className="color-btn" onClick={() => changeColor('red')} value="Red" />  <br /> <br />
      
      </div>
    </nav>

            </div>
            <div className="second" style={{backgroundColor:"green"}}>

            </div>
            <div className="third" style={{backgroundColor:"black"}}>

            </div>
        </div>

        
        </>
    )
}
export default Main;