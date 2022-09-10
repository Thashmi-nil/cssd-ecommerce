import React, { useState, useEffect } from "react";
import '../sell_sidebar/Sidebar.css'
import SidebarS from '../sell_sidebar/Sidebar'
import HeaderS from '../sell_header/Header'
import './Items.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'

export default function Trainers() {

    useEffect(() => {
        checkValidate();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };

    const [trainerDetails] = useState([
        {
            ItemID: "S001",
            ItemName: "Item 01",
            ItemDescription: "Description 1",
        },
        {
            ItemID: "S001",
            ItemName: "Item 01",
            ItemDescription: "Description 1",
        },
        {
            ItemID: "S001",
            ItemName: "Item 01",
            ItemDescription: "Description 1",
        },
        {
            ItemID: "S001",
            ItemName: "Item 01",
            ItemDescription: "Description 1",
        },
        {
            ItemID: "S001",
            ItemName: "Item 01",
            ItemDescription: "Description 1",
        },
        {
            ItemID: "S001",
            ItemName: "Item 01",
            ItemDescription: "Description 1",
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
                                { title: "Item Description", field: "ItemDescription" },
                            ]}
                            icons={TableIcons}
                            data={trainerDetails}
                            actions={[
                                {
                                    icon: () => {
                                        return (
                                            <button
                                                type="button"
                                                className="btn mt-0"
                                                style={{
                                                    backgroundColor: "#bf0603",
                                                    color: '#fff',
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
                                                Update
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
                    <div className="item-form-container">
                        <div className="form-inputs item-form-inputs">
                            <div style={{ marginBottom: '50px' }}><h5>New Item</h5>
                                <hr /></div>
                            <form>
                                <div class="form-group item-form-input-field ">
                                    <label for="exampleInputEmail1">Itam Name</label>
                                    <input type="text" class="form-control" id="" placeholder="Enter Item Name"></input>
                                    <small id="emailHelp" class="form-text text-muted"></small>
                                </div>
                                <div class="form-group item-form-input-field">
                                    <label for="exampleInputEmail1">Item Description</label>
                                    <input type="text" class="form-control" id="" placeholder="Enter Item Description"></input>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
