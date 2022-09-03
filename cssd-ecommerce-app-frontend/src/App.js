import React from 'react';
import { Navbar } from './components/Pages/all/LandingPage/Navbar';
import { Header } from './components/Pages/all/LandingPage/Header';


import Registration from './components/Pages/all/registrationPage/Registration';
// import Sidebar from './Components/Utilities/Sidebar/Sidebar';
// import PictureUploader from './Components/Utilities/Form/PictureUploader/PictureUploader';
import Login from './components/Pages/all/loginPage/LoginPage';
import ResetPassword from './components/Pages/all/resetPassword/ResetPassword';
// import PieChart from './Components/Utilities/Charts/PieChart';
// import BarChart from './Components/Utilities/Charts/BarChart';
// import LineChart from './Components/Utilities/Charts/LineChart';
// import SearchBar from './Components/Utilities/SearchBar/SearchBar';
// import Calendar from './Components/Utilities/CalendarComp/CalendarComp';
// import SampleCal from './Components/Utilities/CalendarComp/SampleCal';
// import Alert from './Components/Utilities/AlertPopup/AlertPopup'
// import Profile from './Components/Pages/all/Profile/ProfileVIewNew'


// CUSTOMER
// import SidebarC from './Components/Pages/customer/cus_sidebar/Sidebar';
// import DashboardC from './Components/Pages/customer/cus_dashboard/Dashboard';
// import UsersC from './Components/Pages/customer/cus_users/Users';
// import SellersC from './Components/Pages/customer/cus_sellers/Sellers';

// SELLER
// import TrainerS from './Components/Pages/seller/sell_trainers/Trainers';
// import DashboardS from './Components/Pages/seller/sell_dashboard/Dashboard';
// import AnalyticsS from './Components/Pages/seller/sell_analytics/Analytics';

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
          {/* <Route path="/searchBar" element={<SearchBar />}></Route>
          <Route path="/alert" element={<Alert />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          <Route path="/samplecal" element={<SampleCal />}></Route>
          <Route path="/picup" element={<PictureUploader />}></Route>
          <Route path="/profile" element={<Profile />}></Route> */}

          {/* CUSTOMER ROUTES */}
          {/* <Route path="/Cdashboard" element={<DashboardC />}></Route>
          <Route path="/Cusers" element={<UsersC />}></Route>
          <Route path="/Csellers" element={<SellersC />}></Route> */}

          {/* SELLER ROUTES */}
          {/* <Route path="/Strainers" element={<TrainerS />}></Route>
          <Route path="/Sdashboard" element={<DashboardS />}></Route>
          <Route path="/Sanalytics" element={<AnalyticsS />}></Route> */}

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
