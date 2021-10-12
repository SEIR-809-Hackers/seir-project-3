import React from 'react';
import UserForm from './UserForm';
import {Route, Link } from 'react-router-dom';
import MainUser from '../styles/user';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SignIn from './SignIn';

function User({ user, setUser }) {
	
	return (
		<MainUser>
			{/* {!user.length ? (
				<div classname='forms'>
					
				</div>
			) : (
				<h1>hello</h1>
			)} */}
		</MainUser>
	);
}

export default User;
