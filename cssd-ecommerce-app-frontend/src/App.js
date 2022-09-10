import React from 'react';
import { Navbar } from './components/Pages/all/LandingPage/Navbar';
import { Header } from './components/Pages/all/LandingPage/Header';


import Registration from './components/Pages/all/RegistrationPage/Registration';
import Login from './components/Pages/all/LoginPage/LoginPage';
import ResetPassword from './components/Pages/all/ResetPassword/ResetPassword';
// import PieChart from './Components/Utilities/Charts/PieChart';
// import BarChart from './Components/Utilities/Charts/BarChart';
// import LineChart from './Components/Utilities/Charts/LineChart';
// import Alert from './Components/Utilities/AlertPopup/AlertPopup'
// import Profile from './Components/Pages/all/Profile/ProfileVIewNew'


// CUSTOMER
import Dashboard from './components/Pages/Customer/cus_dashboard/Dashboard';
import OrdersC from './components/Pages/Customer/cus_orders/Orders'
import CartC from './components/Pages/Customer/cus_cart/Cart'
import PaymentC from './components/Pages/Customer/cus_payment/Payment'


// SELLER
// import CustomersS from './components/Pages/Seller/sell_customers/Customer';
// import DashboardS from './components/Pages/Seller/sell_dashboard/Dashboard';
import ItemsS from './components/Pages/Seller/sell_items/Items';
import OrderS from './components/Pages/Seller/sell_delivery/Delivery';


import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>

      <div className="App">

        <Routes>

          {/* ALL ROUTES */}
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/resetpasswd" element={<ResetPassword />}></Route>
          {/* 
          <Route path="/alert" element={<Alert />}></Route>
          <Route path="/samplecal" element={<SampleCal />}></Route>
          <Route path="/picup" element={<PictureUploader />}></Route>
          <Route path="/profile" element={<Profile />}></Route> */}

          {/* CUSTOMER ROUTES */}
          <Route path="/Cdashboard" element={<Dashboard />}></Route>
          <Route path="/Corders" element={<OrdersC />}></Route>
          <Route path="/Ccart" element={<CartC />}></Route>
          <Route path="/Cpayment" element={<PaymentC />}></Route>

          {/* SELLER ROUTES */}
          {/* <Route path="/Scustomers" element={<CustomersS />}></Route> */}
          {/* <Route path="/Sdashboard" element={<DashboardS />}></Route> */}
          <Route path="/Sorder" element={<OrderS />}></Route>
          <Route path="/Sitems" element={<ItemsS />}></Route>

        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <Navbar />
    <Header />

  </div>
)

export default App;
