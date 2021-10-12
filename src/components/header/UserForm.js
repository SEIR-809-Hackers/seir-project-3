import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import adventure from '../../assets/joinImage.png';
import femAvatar from '../../assets/maleAvatar.png';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

function UserForm({ user, setUser }) {
	let history = useHistory();
	const [newUser, setNewUser] = useState({
		email: '',
		username: '',
		password: '',
	});
	const { addToast } = useToasts();

	async function handleSubmit(event) {
		event.preventDefault();
		// send user document to backend
		

		try {
			console.log(newUser);
			let addUser = { ...newUser };
			console.log(addUser);
			const addUserURL = `https://fast-springs-20221.herokuapp.com/users/signup`;
			let res = await axios.post(addUserURL, addUser);
			if (res) {
				addToast('Profile Created! 🏔', {
					appearance: 'success',
					autoDismiss: true,
					autoDismissTimeout: 1500,
				});
			}
		} catch (error) {
			console.log(error);
		}
		history.push('login')
	}

	function handleChange(event) {
		// set user to current state
		event.preventDefault();
		setNewUser({ ...newUser, [event.target.id]: event.target.value });
	}

	return (
		<div className='user-form'>
			<div className='form-message'>
				<img alt='girl walking towards woods' className='form-image left sign' src={adventure}></img>
			</div>
			<div className='container'>
				<h3 className='main-message'>Join The Adventure</h3>
				<img alt='avatar of man' src={femAvatar} className='form-image avatar male'></img>
				<form onSubmit={handleSubmit} className='form-body'>
					<input
						required
						placeholder='email'
						type='text'
						id='email'
						onChange={handleChange}
					/>
					<input
						required
						placeholder='username'
						type='text'
						id='username'
						onChange={handleChange}
					/>
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
