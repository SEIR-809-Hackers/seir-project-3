import React from 'react';
import User from './User';
import {Link} from 'react-router-dom'
import MainHeader from '../styles/header';

function Header({user,setCurrentUser}) {
    return (
        <MainHeader>
            <Link to='/' style={{textDecoration: "none"}}>
            <h1>ParkPass</h1>
            </Link>
            <User user={user} setCurrentUser={setCurrentUser}/>
        </MainHeader>
    );
}

export default Header;