import React from 'react';
import { useState } from 'react';
import MainForm from '../styles/form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../../DataContext';
import adventure from '../../assets/adventure.png';
import femAvatar from '../../assets/femAvatar.png';

function SignIn() {
	let history = useHistory();
	const { currentUser, setCurrentUser } = useContext(DataContext);
	const { loginStatus, setLoginStatus } = useContext(DataContext);
	const [user, setUser] = useState({
		username: '',
		password: '',
	});

	async function handleSubmit(event) {
		event.preventDefault();
		// send user document to backend
		try {
			console.log(user);
			const signInURL = `https://fast-springs-20221.herokuapp.com/users/signin`;
			let res = await axios.post(signInURL, user);
			// save to local stroge
			localStorage.setItem('token', JSON.stringify(res.data.token));
			//Access Local Token
			// JSON.parse(localStorage.getItem('token')
			localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
			setCurrentUser(user);
			setLoginStatus(true);
			// console.log('Bearer ' + JSON.parse(localStorage.getItem('token')));
			// let logIn = await axios.get(
			// 	`https://fast-springs-20221.herokuapp.com/users/${user.username}`,
			// 	{
			// 		headers: {
			// 			jwt: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
			// 		},
			// 	}
			// );
			let login = await axios.get(`https://fast-springs-20221.herokuapp.com/users/${user.username}`)
			console.log(login.data)
			setCurrentUser(login.data)
			// console.log(logIn);
			history.push('/parks');
		} catch (error) {
			console.log(error);
		}
	}

	function handleChange(event) {
		// set user to current state
		event.preventDefault();
		setUser({ ...user, [event.target.id]: event.target.value });
	}

	return (
		<div className='user-form'>
			<div className='form-message'>
				<img className='form-image left' src={adventure}></img>
			</div>
			<div className='container'>
				<h3 className='main-message'>Continue The Adventure</h3>
				<img src={femAvatar} className='form-image avatar'></img>
				<form onSubmit={handleSubmit} className='form-body'>
					{/* <label>
						<strong>Username:</strong>
					</label> */}
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
					<button className='btn login-btn' type='submit'>
						Login
					</button>
				</form>
			</div>
		</div>
	);
}

export default SignIn;
