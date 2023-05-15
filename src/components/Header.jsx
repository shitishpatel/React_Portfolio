import React from 'react'
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import {FiSearch} from 'react-icons/fi';

const Header = () => {
  return (
    <nav>
        <div className="container">
        <div className="nav">
            <div className="nav_logo">
                <img src="" alt="logo" srcset="" />
                <div className="logo">
                <p>Port.</p>
                <p>Tanim</p>
                </div>
            </div>
            <div className="link">
                <Link to={"/"}>About</Link>
                <Link to={"/service"}>Service</Link>
                <Link to={"/portfolio"}>Portfolio</Link>
                <Link to={"/testimonial"}>Testimonial</Link>
            </div>
            <div className="search">
                <input type="text" placeholder='Search'/>
                <IconContext.Provider value={{className:"icons"}}>
                <FiSearch></FiSearch>
                </IconContext.Provider>
               
            </div>
        </div>
        </div>
    </nav>
  )
}

export default Header;