import React from 'react'
import './styles/styles.css'
import { PiCellSignalHighBold } from "react-icons/pi";
import { FaWifi } from "react-icons/fa";
import { IoIosBatteryFull } from "react-icons/io";

import Rose from '../assets/roses-default.png';
import MenuItems from '../assets/Menu Items.png';
import ImageIcon from '../assets/Imagicon.png';
import ButtonLeft from '../assets/button - left.png';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    return (
        <div className='header'>
            <div className='status-bar'>
                <div className='status-group'>
                    <div className='hour'>
                        11:20
                    </div>
                    <div className='signals'>
                        <div className='wifi'><PiCellSignalHighBold /></div>
                        <div className='signal'><FaWifi /></div>
                        <div className='battery'><IoIosBatteryFull /></div>
                    </div>
                </div>
            </div>

            <div className='app-navigation'>
                <div className='branding'>
                    <img className='brading-logo' src={Rose} alt="Rose" />
                    <span className='brading-text'>Roses™</span>
                </div>

                <div className='right'>
                    <img className='menu-items' src={MenuItems} alt="Menu Items" />
                    <img className='image-icon' src={ImageIcon} alt="Icon" />
                </div>
            </div>
        <div className='page-titles'>
        <Link to={location.pathname === '/profile-configuration' ? '/tabs' : '/profile-configuration'}>
            <button className='left-button'>
            <img src={ButtonLeft} alt="Button left" />
            </button>
        </Link>

        <div className='title'>
            {location.pathname === '/profile-configuration' ? (
            <>
                <span className='profile'>EDIT</span>
                <span className='config'>Configuration</span>
            </>
            ) : (
            <>
                <span className='profile'>PROFILE</span>
                <span className='config'>Configuration</span>
            </>
            )}
        </div>
        </div>

        </div>
    )
}

export default Header