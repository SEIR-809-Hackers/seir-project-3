import './App.css';
// import { DataContext } from './DataContext';
import Header from './components/header/Header';
import Home from './components/Home';
import ParkList from './components/parkList/ParkList';
import ParkDetail from './components/ParkDetail';
import User from './components/header/User';
import SignIn from './components/header/SignIn';
import UserForm from './components/header/UserForm';
import { Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ParkPass from './components/parkPass/ParkPass';
import axios from 'axios';
import { DataContext } from './DataContext';
//testing json
import DataPark from './dataPark.json';
import DataReview from './dataReview.json';
import DataUser from './dataUser.json';

function App() {
	const [parks, setParks] = useState([]);
	const [user, setUser] = useState([]);
	const [currentUser, setCurrentUser] = useState([]);
	const [reviews, setReviews] = useState(DataReview);

	function setNewUser(user) {
		setUser({ ...user, name: user });
	}

	useEffect(() => {
		const parkURL = 'https://fast-springs-20221.herokuapp.com/parks';
		fetch(parkURL)
			.then((res) => res.json())
			.then((res) => {
				setParks(res);
			})
			.catch((err) => console.log(err));

		//   fetch(userURL)
		// 			.then((res) => res.json())
		// 			.then((res) => {
		// 				setUser(res);
		// 			})
		// 			.catch((err) => console.log(err));

		return () => {};
	}, []);

	// function updateUser(obj) {
	// 	setCurrentUser(obj);
	// }

	useEffect(() => {
		let username = currentUser.username;
		let token = JSON.parse(localStorage.getItem('token'));
		let config = {
			headers: { Bearer: token },
		};
		const userURL =
			'https://fast-springs-20221.herokuapp.com/users/' + username;
		let res = axios.get(userURL, config);

		setUser(res);
	}, []);

	return (
		<>
			<div className='App'>
				<DataContext.Provider value={{ setCurrentUser, user, setUser }}>
					<Route
						path='/'
						render={() => (
							<Header user={user} setCurrentUser={setCurrentUser} />
						)}
					/>
					<User user={user} setCurrentUser={setCurrentUser} />
					<Route exact path='/users/signup'>
						<UserForm setUser={setUser} />
					</Route>
					<Route exact path='/users/login'>
						<SignIn />
					</Route>
				</DataContext.Provider>
				<Route exact path='/'>
					<Home />
				</Route>
				<div className='parks-layout'>
				<Route
					path='/parks'
					render={() => <ParkList parks={parks} setParks={setParks} />}
				/>
					<Route
						exact
						path='/parks/:id'
						render={() => <ParkDetail parks={parks} user={user} />}
					/>
					<Route
						exact
						path='/parkpass'
						render={() => (
							<ParkPass
								parks={parks}
								setParks={setParks}
								user={user}
								reviews={reviews}
								setReviews={setReviews}
							/>
						)}
					/>
				</div>
			</div>
		</>
	);
}

export default App;
