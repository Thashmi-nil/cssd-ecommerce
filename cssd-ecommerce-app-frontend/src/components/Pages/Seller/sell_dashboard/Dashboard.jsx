import React, { useState, useEffect } from 'react'
import '../sell_sidebar/Sidebar.css'
import SidebarS from '../sell_sidebar/Sidebar'
import HeaderS from '../sell_header/Header'
import './Dashboard.css'

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
        <HeaderS title="Dasboard" />
        <div className="content-container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores pariatur rem beatae provident debitis modi, eos accusamus mollitia dolorum consequatur et quo sapiente reprehenderit? Quibusdam cupiditate nemo illo sed quam?
        </div>
      </div>
    </div >
  )
}

export default Dashboard