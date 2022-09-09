import React, { useState, useEffect } from 'react'
import '../sell_sidebar/Sidebar.css'
import './Customer.css'
import SidebarS from '../sell_sidebar/Sidebar'
import HeaderS from '../sell_header/Header'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Dashboard = () => {

  useEffect(() => {
    checkValidate();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };


  return (
    <div className='main-container'>
      <SidebarS />
      <div className='body-container'>
        <HeaderS title="Customers" />
        <div className="content-container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, exercitationem. Provident dicta sapiente maxime nulla vitae repellat, eligendi, repellendus cupiditate, tenetur tempora totam nobis officia aspernatur fuga? Aspernatur, repellendus cum!
        </div>
      </div>
    </div>
  )
}

export default Dashboard