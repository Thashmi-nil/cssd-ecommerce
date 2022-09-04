import React, { useEffect } from 'react'
import '../cus_sidebar/Sidebar.css'
import SidebarO from '../cus_sidebar/Sidebar'
import HeaderO from '../cus_header/header'
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
      <SidebarO />
      <div className='body-container'>
        <HeaderO title="Dasboard" />
        <div className="content-container">

          <div className='adm-dashboard-card-container'>

            <div className='adm-dashboard-card adm-dashboard-profile-cards'>
              <div className='adm-dashboard-card-content'>
                <div className='staffID'>Active Web Users</div>
                <div className='staffName'>20</div>
              </div>
            </div>

            <div className='adm-dashboard-card adm-dashboard-profile-cards'>
              <div className='adm-dashboard-card-content'>
                <div className='staffID'>Active Mobile Users</div>
                <div className='staffName'>24</div>
              </div>
            </div>

            <div className='adm-dashboard-card adm-dashboard-profile-cards'>
              <div className='adm-dashboard-card-content'>
                <div className='staffID'>On hold accounts</div>
                <div className='staffName'>11</div>
              </div>
            </div>

            <div className='adm-dashboard-card adm-dashboard-profile-cards'>
              <div className='adm-dashboard-card-content'>
                <div className='staffID'>Payment Plans</div>
                <div className='staffName'>3</div>
              </div>
            </div>

            

          </div>

        </div>

      </div>
    </div>
  )
}

export default Dashboard