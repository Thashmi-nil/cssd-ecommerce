import React, { useState, useEffect } from "react";
import '../cus_sidebar/Sidebar.css'
import SidebarS from '../cus_sidebar/Sidebar'
import HeaderS from '../cus_header/header'
import './Cart.css'
import { Link } from 'react-router-dom'

import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'

import {getCart } from "../../../../services/CartService";

export default function Orders() {

    useEffect(() => {
        checkValidate();
        getMyCartData();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };
    const getMyCartData = async () => {
        const res = await getCart(2);
        setCartDetails(res.data);
        console.log(res.data);
      };

    const [cartDetails,setCartDetails] = useState([]);
    return (

        <div className='main-container'>
            <SidebarS />
            <div className='body-container'>
                <HeaderS title="Cart" />
                <div className="content-container items">
                    <div className="orders-table-container">
                        <MaterialTable
                            title="Cart"
                            columns={[
                                { title: "Item ID", field: "itemId",hidden:true},
                                { title: "Customer ID", field: "customerId",hidden:true},
                                { title: "Cart ID", field: "cartId",hidden:true},
                                { title: "Item Name", field: "itemName" },
                                { title: "Price", field: "price" },
                                { title: "Quantity", field: "quantity" },
                            ]}
                            icons={TableIcons}
                            data={cartDetails}
                            actions={[
                               
                                {
                                    icon: () => {
                                        return (
                                            <button
                                                type="button"
                                                className="btn mt-0"
                                                style={{
                                                    backgroundColor: "#bf0603",
                                                    border: "none",
                                                }}
                                            >
                                                Remove
                                            </button>
                                        );
                                    },
                                    onClick: (event, rowData) => {
                                        console.log("Item "+rowData.itemName+" "+rowData.itemName+"removed!")
                                        // To Do 
                                    },
                                },

                            ]}
                            options={{
                                headerStyle: {
                                    backgroundColor: '#1F0106',
                                    color: '#FFF',
                                    hover: '#FFF'
                                }
                            }}
                        />
                    </div>
                    
                </div>
                <div className="pay-button" >
                  <Link to='/Cpayment'>
                    <button type="submit" class="btn btn-primary">Pay</button>
                  </Link>
                </div>
            </div >
        </div >
    )
}
