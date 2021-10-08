import React from 'react';
import { useState } from 'react';
import MainForm from '../styles/form';
import axios from 'axios';
import { useContext } from 'react';
import { DataContext } from '../../DataContext'


function SignIn() {
   const { setCurrentUser } = useContext(DataContext) 
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
            localStorage.setItem('token', JSON.stringify(res.data.token))
			//Access Local Token
            // JSON.parse(localStorage.getItem('token')
            setCurrentUser(user)
            
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
					<strong>LOGIN</strong>
				</button>
			</form>
		</MainForm>
	);
}

export default SignIn;