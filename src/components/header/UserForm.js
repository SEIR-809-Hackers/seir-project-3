import React from 'react';
import { useState } from 'react';
import MainForm from '../styles/form';
import axios from 'axios';
import adventure from '../../assets/joinImage.png';
import femAvatar from '../../assets/maleAvatar.png';

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
		<div className='user-form'>
			<div className='form-message'>
				<img className='form-image left sign' src={adventure}></img>
			</div>
			<div className='container'>
				<h3 className='main-message'>Join The Adventure</h3>
				<img src={femAvatar} className='form-image avatar male'></img>
				<form onSubmit={handleSubmit} className='form-body'>
					{/* <label>
						<strong>Username:</strong>
					</label> */}
					<input
						required
						placeholder='email'
						type='text'
						id='username'
						onChange={handleChange}
					/>
					<input
						required
						placeholder='username'
						type='text'
						id='username'
						onChange={handleChange}
					/>
					{/* <label>
						<strong>Password:</strong>
					</label> */}
					<input
						required
						placeholder='password'
						type='password'
						id='password'
						onChange={handleChange}
					/>
					<input
						required
						placeholder='confirm password'
						type='password'
						id='password'
						onChange={handleChange}
					/>
					<button className='btn login-btn' type='submit'>
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
}

export default UserForm;
