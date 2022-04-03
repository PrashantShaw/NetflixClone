import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

  return (
      <div className={`nav ${show && "nav__black"}`}>
        <img className="nav__logo" 
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix Logo" />

        <img className="nav__avatar" 
        src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-splunk/contentbuilder/avatar.png" alt="User Logo" />


    </div>
  )
}

export default Nav