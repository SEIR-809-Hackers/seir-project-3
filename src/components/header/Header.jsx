import React from 'react';
import User from './User';
import {Route, Link} from 'react-router-dom'
import MainHeader from '../styles/header';

function Header({user,setCurrentUser}) {
    return (
			<header>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<h1>ParkPass</h1>
				</Link>
				<nav>
					<ul className='header-list'>
						<Link to='/parks'>
							<li>Parks</li>
						</Link>
						<Link to='/users/login'>
							<li className='header-item'>Login</li>
						</Link>
						<Link to='/users/signup'>
							<li className='header-item'>Sign Up</li>
						</Link>
					</ul>
				</nav>
			</header>
		);
}

export default Header;