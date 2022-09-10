import React, { useState, useEffect } from "react";
import '../cus_sidebar/Sidebar.css'
import SidebarS from '../cus_sidebar/Sidebar'
import HeaderS from '../cus_header/header'
import './Cart.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'

export default function Orders() {

    useEffect(() => {
        checkValidate();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };

    const [orderDetails] = useState([
        {
            ItemID: "S001",
            ItemName: "Item 01",
            Price:"Rs. 550",
            Seller: "The ChocoShop",
        },
        {
            ItemID: "S001",
            ItemName: "Item 01",
            Price:"Rs. 550",
            Seller: "The ChocoShop",
        },
        {
            ItemID: "S001",
            ItemName: "Item 01",
            Price:"Rs. 550",
            Seller: "The ChocoShop",
        },
        {
            ItemID: "S001",
            ItemName: "Item 01",
            Price:"Rs. 550",
            Seller: "The ChocoShop",
        },
        {
            ItemID: "S001",
            ItemName: "Item 01",
            Price:"Rs. 550",
            Seller: "The ChocoShop",
        },
        {
            ItemID: "S001",
            ItemName: "Item 01",
            Price:"Rs. 550",
            Seller: "The ChocoShop",
        },

    ]);
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
                                { title: "Item ID", field: "ItemID" },
                                { title: "Item Name", field: "ItemName" },
                                { title: "Price", field: "Price" },
                                { title: "Seller", field: "Seller" },
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
                                                    backgroundColor: "#bf0603",
                                                    border: "none",
                                                }}
                                            >
                                                Remove
                                            </button>
                                        );
                                    },
                                    onClick: (event, rowData) => {

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
            </div >
        </div >
    )
}
