import React, { useState, useEffect } from "react";
import '../cus_sidebar/Sidebar.css'
import SidebarS from '../cus_sidebar/Sidebar'
import HeaderS from '../cus_header/header'
import './Orders.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'

import {getMyOrders,setAsTake } from "../../../../services/OrderService";


export default function Orders() {

    useEffect(() => {
        checkValidate();
        getOrderItems();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };
    const getOrderItems = async () => {
        const res = await getMyOrders(2);
        setOrderDetails(res.data);
        console.log(res.data);
      };

    const [orderDetails,setOrderDetails] = useState([]);
    return (

        <div className='main-container'>
            <SidebarS />
            <div className='body-container'>
                <HeaderS title="Orders" />
                <div className="content-container items">
                    <div className="orders-table-container">
                       
                        <MaterialTable
            title="Your Orders"
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
                      Take
                    </button>
                  );
                },
                onClick: (event, rowData) => {
                    setAsTake(rowData.orderID)
                  window.location.href = "/Corders";
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
                    </div>
                </div>
            </div >
        </div >
    )
}
