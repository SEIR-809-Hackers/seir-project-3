import React from 'react';
import UserForm from './UserForm';
import { Link } from 'react-router-dom';
import MainUser from '../styles/user';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SignIn from './SignIn';

function User({ user, setUser }) {
	// let id = useParams.id;
	// let currentUser = user.filter((target) => target._id === id);

	// fetch that users
	// useEffect(() => {
	// 	axios.get();
	// }, []);
	return (
		<MainUser>
			{/* {user.map((user) => (
				<p>{user.name}</p>
			))} */}
			{!user.length ? (
				<div classname='forms'>
					<h3>Sign Up:</h3>
					<UserForm setUser={setUser} /> 
					<h3>Sign In</h3>
					<SignIn/>
				</div>
			) : (
				// <Link to={'/parkpass/' + id} style={{ textDecoration: 'none' }}>
				// 	<h3>{currentUser[0].name}</h3>
				// </Link>
			<h1>hello</h1>
			)}
		</MainUser>
	);
}

export default User;
