import React from 'react';
import User from './User';
import {Route, Link} from 'react-router-dom'
import MainHeader from '../styles/header';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { DataContext } from '../../DataContext';

function Header() {
	let history = useHistory()
	
	const { setCurrentUser } = useContext(DataContext); 
	const {loginStatus, setLoginStatus} = useContext(DataContext)


	function logOutUser() {
		// clear currentUser, and remove token from local-storage;
		// localStorage.setItem('loginStatus', 'false');
		// localStorage.setItem('token', '');
		// setLoginStatus(false);
		setCurrentUser(null);
		setLoginStatus(false)
		localStorage.clear();
		history.push('/users/login')
	}

    return (
			<header>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<h1>ParkPass</h1>
				</Link>
				{loginStatus ? (
					<nav>
						<ul className='header-list'>
							<Link to='/parks'>
								<button className='btn logout '>Parks</button>
							</Link>
							<Link to='/parkpass'>
								<button className='btn logout header-item'>PassParks</button>
							</Link>
							<button onClick={logOutUser} className='btn logout header-item'>
								Log Out
							</button>
						</ul>
					</nav>
				) : (
					<nav>
						<ul className='header-list'>
							<Link to='/parks'>
								<button className='btn logout header-item'>Parks</button>
							</Link>
							<Link to='/users/login'>
								<button className='btn logout header-item'>Login</button>
							</Link>
							<Link to='/users/signup'>
								<button className='btn logout header-item'>Sign Up</button>
							</Link>
						</ul>
					</nav>
				)}
			</header>
		);
}

export default Header;