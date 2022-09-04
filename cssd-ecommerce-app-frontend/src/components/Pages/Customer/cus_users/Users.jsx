import React, { useEffect } from 'react'
import '../cus_sidebar/Sidebar.css'
import SidebarO from '../cus_sidebar/Sidebar'
import HeaderO from '../cus_header/header'
import './Users.css'
import Button1 from '@mui/material/Button';
import {FaDownload} from "react-icons/fa";


const SystemLog = () => {

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
      <SidebarO />
      <div className='body-container'>
        <HeaderO title="Users" />
        <div className="content-container">
   
        </div>

      </div>
    </div>
  )
}

export default SystemLog
