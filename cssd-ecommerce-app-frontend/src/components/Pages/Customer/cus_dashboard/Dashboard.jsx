import React, { useEffect } from 'react'
import '../cus_sidebar/Sidebar.css'
import SidebarO from '../cus_sidebar/Sidebar'
import HeaderO from '../cus_header/header'
import './Dashboard.css'
import kitkat from '../../../../images/items/kitkat.jpg'
import AddtoCart from '../../../../images/addToCart.svg'

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
              <div className='adm-dashboard-card-img-container'>
                <img src={kitkat} className='adm-dashboard-images' alt="" />
              </div>
                <div className='staffID'>Kitkat Milk Chocolate  </div>
                <div className='staffName'>Rs. 650</div>
                <div className='staffName'>The ChocoShop</div>
                <div className='add-to-cart'><img src={AddtoCart} className='adm-dashboard-addtocart' alt="" /></div>
              </div>
            </div>

            <div className='adm-dashboard-card adm-dashboard-profile-cards'>
              <div className='adm-dashboard-card-content'>
              <div className='adm-dashboard-card-img-container'>
                <img src={kitkat} className='adm-dashboard-images' alt="" />
              </div>
                <div className='staffID'>Kitkat Milk Chocolate  </div>
                <div className='staffName'>Rs. 650</div>
                <div className='staffName'>The ChocoShop</div>
                <div className='add-to-cart'><img src={AddtoCart} className='adm-dashboard-addtocart' alt="" /></div>
              </div>
            </div>

            <div className='adm-dashboard-card adm-dashboard-profile-cards'>
              <div className='adm-dashboard-card-content'>
              <div className='adm-dashboard-card-img-container'>
                <img src={kitkat} className='adm-dashboard-images' alt="" />
              </div>
                <div className='staffID'>Kitkat Milk Chocolate  </div>
                <div className='staffName'>Rs. 650</div>
                <div className='staffName'>The ChocoShop</div>
                <div className='add-to-cart'><img src={AddtoCart} className='adm-dashboard-addtocart' alt="" /></div>
              </div>
            </div>
            

            

          </div>

        </div>

      </div>
    </div>
  )
}

export default Dashboard