import React, { useEffect, useState } from "react";
import "../cus_sidebar/Sidebar.css";
import SidebarO from "../cus_sidebar/Sidebar";
import HeaderO from "../cus_header/header";
import "./Dashboard.css";
import kitkat from "../../../../images/items/kitkat.jpg";
import AddtoCart from "../../../../images/addToCart.svg";
import TableIcons from "../../../Utilities/Tables/ReactTableIcons";
import { getItems } from "../../../../services/ItemService";
import { addToCart} from "../../../../services/CartService";
import Orders from "../cus_cart/Cart";

const Dashboard = () => {
  useEffect(() => {
    checkValidate();
    getSellingItem();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };
  const getSellingItem = async () => {
    const res = await getItems();
    setOrderDetails(res.data);
    console.log(res.data);
  };

  const [orderDetails, setOrderDetails] = useState([]);

  return (
    <div className="main-container">
      <SidebarO />
      <div className="body-container">
        <HeaderO title="Dasboard" />
        <div className="content-container">
          <div className="adm-dashboard-card-container">
            {orderDetails.map((record, i) => (
              <div
                className="adm-dashboard-card adm-dashboard-profile-cards"
                key={i}
              >
                {/* <div className="adm-dashboard-card-content"> */}
                  <div className="adm-dashboard-card-img-container">
                    <img
                      src={record.itemImage}
                      className="adm-dashboard-images"
                      alt=""
                      style={{width:"150px",height:"150px"}}
                    />
                  </div>
                  <div className="staffID">{record.itemName}</div>
                  <div className="staffName">{record.price}</div>
                  <div className="staffName">{record.shopName}</div>

                  <img
                    src={AddtoCart}
                    className="adm-dashboard-addtocart"
                    alt=""
                    onClick={() => {
                      console.log(record.itemName + " " + record.itemId+" Added!");
                      addToCart(record.itemId,2);
                      window.location.href = "/Cdashboard";
                      // To Do
                    }}
                  />
                {/* </div> */}
              </div>
            ))}
          </div>

          
        </div>
        <Orders/>
      </div>
    </div>
  );
};

export default Dashboard;
