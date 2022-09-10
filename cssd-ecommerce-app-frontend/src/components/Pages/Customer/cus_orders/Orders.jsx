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
            Status: "Pending",
        },
        {
            ItemID: "S001",
            ItemName: "Item 01",
            Price:"Rs. 550",
            Status: "Pending",
        },
        {
            ItemID: "S001",
            ItemName: "Item 01",
            Price:"Rs. 550",
            Status: "Pending",
        },
        {
            ItemID: "S001",
            ItemName: "Item 01",
            Price:"Rs. 550",
            Status: "Pending",
        },
        {
            ItemID: "S001",
            ItemName: "Item 01",
            Price:"Rs. 550",
            Status: "Pending",
        },
        {
            ItemID: "S001",
            ItemName: "Item 01",
            Price:"Rs. 550",
            Status: "Pending",
        },

    ]);
    return (

        <div className='main-container'>
            <SidebarS />
            <div className='body-container'>
                <HeaderS title="Items" />
                <div className="content-container items">
                    <div className="table-container">
                        <MaterialTable
                            title="Items"
                            columns={[
                                { title: "Item ID", field: "ItemID" },
                                { title: "Item Name", field: "ItemName" },
                                { title: "Price", field: "Price" },
                                { title: "Status", field: "Status" },
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
                                                    backgroundColor: "#ffbe0b",
                                                    border: "none",
                                                }}
                                            >
                                                Confirm
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
