import React from 'react';
import User from './User';
import {Route, Link} from 'react-router-dom'
import MainHeader from '../styles/header';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { DataContext } from '../../DataContext';

function Header() {
	
	const { setCurrentUser } = useContext(DataContext); 
	const {loginStatus, setLoginStatus} = useContext(DataContext)


	function logOutUser() {
		// clear currentUser, and remove token from local-storage;
		localStorage.setItem('loginStatus', 'false');
		localStorage.setItem('token', '');
		setLoginStatus(false);
	}

    return (
			<header>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<h1>ParkPass</h1>
				</Link>
				{
					loginStatus ? 
					<nav>
						<ul className='header-list'>
							<Link to='/parks'>
								<li>Parks</li>
							</Link>
							<Link to='/parkpass'>
								<li className='header-item'>PassParks</li>
							</Link>
								<button onClick={logOutUser}className='header-item'>Log Out</button>
						</ul>
					</nav> :
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
				}
			</header>
		);
}

export default Header;