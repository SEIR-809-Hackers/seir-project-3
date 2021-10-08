import React from 'react';
import User from './User';
import {Link} from 'react-router-dom'
import MainHeader from '../styles/header';

function Header({user}) {
    return (
        <div class='card'>

        <MainHeader>
            <Link to='/' style={{textDecoration: "none"}}>
            <h2>ParkPass</h2>
            </Link>
            <User user={user}/>
        </MainHeader>

        </div>
    );
}

export default Header;