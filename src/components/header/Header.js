import React from 'react';
import User from './User';
import {Link} from 'react-router-dom'
import MainHeader from '../styles/header';

function Header({user}) {
    return (
        <MainHeader>
            <Link to='/' style={{textDecoration: "none"}}>
            <h1>ParkPass</h1>
            </Link>
            <User user={user}/>
        </MainHeader>
    );
}

export default Header;