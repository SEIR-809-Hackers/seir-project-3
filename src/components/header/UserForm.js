import React from 'react';
import { useState } from 'react';
import MainForm from '../styles/form';
import axios from 'axios';

function UserForm({ user, setUser }) {
	const [newUser, setNewUser] = useState({
		username: '',
		password: '',
	});

	async function handleSubmit(event) {
		event.preventDefault();
		// send user document to backend
		try {
			console.log(newUser);
			let addUser = { ...newUser };
			console.log(addUser);
			const addUserURL = `https://fast-springs-20221.herokuapp.com/users/signup`;
			let res = await axios.post(addUserURL, addUser);
			// setUser([res]);
		} catch (error) {
			console.log(error);
		}
	}

	function handleChange(event) {
		// set user to current state
		event.preventDefault();
		setNewUser({ ...newUser, [event.target.id]: event.target.value });
	}

	return (
		<MainForm className='user-form'>
			<form onSubmit={handleSubmit}>
				<label>
					<strong>Username:</strong>
				</label>
				<input type='text' id='username' onChange={handleChange} />
				<label>
					<strong>password:</strong>
				</label>
				<input type='text' id='password' onChange={handleChange} />
				<button type='submit'>
					<strong>Sign Up</strong>
				</button>
			</form>
		</MainForm>
	);
}

export default UserForm;
