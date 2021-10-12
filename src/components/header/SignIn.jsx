import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../../DataContext';
import adventure from '../../assets/adventure.png';
import femAvatar from '../../assets/femAvatar.png';
import {useToasts} from 'react-toast-notifications'

function SignIn() {
	let history = useHistory();
	const { setCurrentUser } = useContext(DataContext);
	const { loginStatus, setLoginStatus } = useContext(DataContext);
	const [user, setUser] = useState({
		username: '',
		password: '',
	});
	const { addToast } = useToasts();

	async function handleSubmit(event) {
		event.preventDefault();
		// send user document to backend
		try {
			const signInURL = `https://fast-springs-20221.herokuapp.com/users/signin`;
			let res = await axios.post(signInURL, user);
			if (res.status === 200) {
				setLoginStatus(true);
				localStorage.setItem('token', JSON.stringify(res.data.token));
				localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
				let login = await axios.get(`https://fast-springs-20221.herokuapp.com/users/getByUsername/${user.username}`)
				setCurrentUser(login.data)
				localStorage.setItem('user', JSON.stringify(login.data));
				addToast('Successfully Signed In!', {appearance: 'success',autoDismiss: true,autoDismissTimeout: 1500})
				history.push('/parks');
			}
			else {
				
			}
			
		} catch (error) {
			console.log(error);
			addToast('User Not Found.', {appearance: 'warning',autoDismiss: true, autoDismissTimeout: 1500})
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
				<img alt='girl walking towards woods' className='form-image left' src={adventure}></img>
			</div>
			<div className='container'>
				<h3 className='main-message'>Continue The Adventure</h3>
				<img alt='avatar of women' src={femAvatar} className='form-image avatar'></img>
				<form onSubmit={handleSubmit} className='form-body'>
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
					<button className='btn login-btn' type='submit'>
						Login
					</button>
				</form>
			</div>
		</div>
	);
}

export default SignIn;
