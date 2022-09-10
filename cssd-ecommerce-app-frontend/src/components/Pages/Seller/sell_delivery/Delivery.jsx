import React, { useState, useEffect } from "react";
import "../sell_sidebar/Sidebar.css";
import SidebarO from "../sell_sidebar/Sidebar";
import HeaderO from "../sell_header/Header";
// import '../own_dashboard/Dashboard.css'
import "./Delivery.css";

import Button from "../../../Utilities/Form/Button";
import InputField from "../../../Utilities/Form/InputField";
import { Validators } from "../../../Utilities/Form/Validator/Validator";
import Table from "../../../Utilities/Tables/Table2";
import MaterialTable from "material-table";
import TableIcons from "../../../Utilities/Tables/ReactTableIcons";
import { getOrders,getPreviousOrders,setAsDelivered } from "../../../../services/OrderService";

const OAnnouncements = () => {
  useEffect(() => {
    checkValidate();
    getOrderItems();
    getPreviousOrderItems();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    alert("Button Clicked");
  };

  const getOrderItems = async () => {
    const res = await getOrders();
    setOrderDetails(res.data);
    console.log(res.data);
  };

  const getPreviousOrderItems = async () => {
    const res = await getPreviousOrders();
    setPreviousOrderDetails(res.data);
    console.log(res.data);
  };
  const [previousOrderDetails, setPreviousOrderDetails] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);
  return (
    <div className="main-container">
      <SidebarO />
      <div className="body-container">
        <HeaderO title="Delivery" />
        <div className="own-announcement-content-container">
          <MaterialTable
            title="New Orders"
            columns={[
              { title: "Order ID", field: "orderID" },
              { title: "Delivery Location", field: "location" },
              { title: "Total Price", field: "totalPrice" },
            ]}
            icons={TableIcons}
            data={orderDetails}
            actions={[
              {
                icon: () => {
                  return (
                    <button
                      type="button"
                      className="btn mt-0"
                      style={{
                        backgroundColor: "#00FF00",
                        border: "none",
                      }}
                    >
                      Post
                    </button>
                  );
                },
                onClick: (event, rowData) => {
                  setAsDelivered(rowData.orderID)
                  window.location.href = "/Sorder";
                },
              },

              {
                icon: () => {
                  return (
                    <button
                      type="button"
                      className="btn mt-0"
                      style={{
                        backgroundColor: "#00FF00",
                        border: "none",
                      }}
                    >
                      More
                    </button>
                  );
                },
                onClick: (event, rowData) => {},
              },
            ]}
            options={{
              headerStyle: {
                backgroundColor: "#1F0106",
                color: "#FFF",
                hover: "#FFF",
              },
            }}
          />

          <MaterialTable
            title="Previous Orders"
            columns={[
              { title: "Order ID", field: "orderID" },
              { title: "Delivery Location", field: "location" },
              { title: "Total Price", field: "totalPrice" },
            ]}
            icons={TableIcons}
            data={previousOrderDetails}
            actions={[
              {
                icon: () => {
                  return (
                    <button
                      type="button"
                      className="btn mt-0"
                      style={{
                        backgroundColor: "#00FF00",
                        border: "none",
                      }}
                    >
                      Posting
                    </button>
                  );
                },
                onClick: (event, rowData) => {},
              },

              {
                icon: () => {
                  return (
                    <button
                      type="button"
                      className="btn mt-0"
                      style={{
                        backgroundColor: "#00FF00",
                        border: "none",
                      }}
                    >
                      More
                    </button>
                  );
                },
                onClick: (event, rowData) => {},
              },
            ]}
            options={{
              headerStyle: {
                backgroundColor: "#1F0106",
                color: "#FFF",
                hover: "#FFF",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OAnnouncements;
