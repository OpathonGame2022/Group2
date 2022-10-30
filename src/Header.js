import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return(
        <div className='header'>
            <div className='header__left'>
                <img src="http://image.noelshack.com/fichiers/2022/43/7/1667082549-linkedin.png" alt=""/>

                <div className='header__search'>
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>

            <div className='header__right'>
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Chats' />
                <HeaderOption Icon={NotificationsIcon} title='Nortifications' />
                <HeaderOption avatar="http://image.noelshack.com/fichiers/2022/43/7/1667085485-senparc.jpg" title='me' />
            </div>

        </div>
    )
}

export default Header