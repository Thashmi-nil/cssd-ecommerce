import React, { useState, useEffect } from 'react'
import '../sell_sidebar/Sidebar.css'
import SidebarO from '../sell_sidebar/Sidebar'
import HeaderO from '../sell_header/Header'
// import '../own_dashboard/Dashboard.css'
import './Delivery.css'

import Button from '../../../Utilities/Form/Button';
import InputField from "../../../Utilities/Form/InputField";
import { Validators } from "../../../Utilities/Form/Validator/Validator";
import Table from '../../../Utilities/Tables/Table2';

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
        <HeaderO title="Delivery" />
        <div className="own-announcement-content-container">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic sapiente quod culpa, dolor minus ipsam dicta reiciendis repellat est autem, temporibus cupiditate quasi, sed necessitatibus animi obcaecati eaque reprehenderit labore?

        </div>

      </div>
    </div>
  )
}

export default OAnnouncements
