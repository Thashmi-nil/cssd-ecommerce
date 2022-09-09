import React, { useState, useEffect } from "react";
import '../sell_sidebar/Sidebar.css'
import SidebarS from '../sell_sidebar/Sidebar'
import HeaderS from '../sell_header/Header'
import './Items.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

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

    return (

        <div className='main-container'>
            <SidebarS />
            <div className='body-container'>
                <HeaderS title="Items" />
                <div className="content-container">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nostrum esse expedita maxime temporibus veniam, commodi consequatur? Excepturi beatae eos quaerat repudiandae, veniam quos saepe asperiores sequi maxime optio ullam.
                </div>
            </div >
        </div >
    )
}
