import React, { useState, useEffect } from 'react'
import '../cus_sidebar/Sidebar.css'
import SidebarO from '../cus_sidebar/Sidebar'
import HeaderO from '../cus_header/header'
import './Payment.css'

const OAnnouncements = () => {

  useEffect(() => {
    checkValidate();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };


  const handleClick = (event) => {
    event.preventDefault();
    alert('Button Clicked');
  };
  return (
    <div className='main-container'>
      <SidebarO />
      <div className='body-container'>
        <HeaderO title="Payment" />
        <div className="own-announcement-content-container">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic sapiente quod culpa, dolor minus ipsam dicta reiciendis repellat est autem, temporibus cupiditate quasi, sed necessitatibus animi obcaecati eaque reprehenderit labore?

        </div>

      </div>
    </div>
  )
}

export default OAnnouncements
