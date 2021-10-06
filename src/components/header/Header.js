import React from 'react';
import User from './User';

function Header({user}) {
    return (
        <div className='header'>
            <h1>ParkPass</h1>
            <User user={user}/>
        </div>
    );
}

export default Header;