import './App.css';
import Header from './components/header/Header';
import Home from './components/Home';
import ParkList from './components/parkList/ParkList';
import ParkDetail from './components/parkList/ParkDetail';
import SignIn from './components/header/SignIn';
import UserForm from './components/header/UserForm';
import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ParkPass from './components/parkPass/ParkPass';
import axios from 'axios';
import { DataContext } from './DataContext';
import ParkSelect from './components/parkList/ParkSelect';

function App() {
	const [parks, setParks] = useState([]);
	const [user, setUser] = useState(null);
	const [loginStatus, setLoginStatus] = useState(
		false || localStorage.getItem('loginStatus')
	);
	const [currentUser, setCurrentUser] = useState([]);

	useEffect(() => {
		const parkURL = 'https://fast-springs-20221.herokuapp.com/parks';
		fetch(parkURL)
			.then((res) => res.json())
			.then((res) => {
				setParks(res);
			})
			.catch((err) => console.log(err));
		const loggedInUser = localStorage.getItem('user');
		if (loggedInUser) {
			const foundUser = JSON.parse(loggedInUser);
			setCurrentUser(foundUser);
		}
	}, []);

	async function updateParks(event) {
		event.preventDefault();
		// send user document to backend
		try {
			let login = await axios.get(
				`https://fast-springs-20221.herokuapp.com/users/getByUsername/${currentUser.username}`
			);
			setCurrentUser(login.data);
			localStorage.setItem('user', JSON.stringify(login.data));
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<div className='App'>
				<DataContext.Provider
					value={{
						currentUser,
						setCurrentUser,
						user,
						setUser,
						loginStatus,
						setLoginStatus,
						parks,
						updateParks,
					}}>
					<Route path='/' render={() => <Header />} />
					<Route exact path='/users/signup'>
						<UserForm setUser={setUser} />
					</Route>
					<Route exact path='/users/login'>
						<SignIn />
					</Route>
					<Route exact path='/parkpass' render={() => <ParkPass />} />
					<div className='parks-layout'>
						<Route
							path='/parks'
							render={() => <ParkList parks={parks} setParks={setParks} />}
						/>
						<Route path='/parks' exact render={() => <ParkSelect />} />
						<Route
							exact
							path='/parks/:id'
							render={() => <ParkDetail parks={parks} user={user} />}
						/>
					</div>
				</DataContext.Provider>
				<Route exact path='/'>
					<Home />
				</Route>
			</div>
		</>
	);
}

export default App;
