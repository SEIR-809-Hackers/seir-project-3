import './App.css';
// import { DataContext } from './DataContext';
import Header from './components/header/Header';
import Home from './components/Home';
import ParkList from './components/parkList/ParkList';
import ParkDetail from './components/parkList/ParkDetail';
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
	const [user, setUser] = useState(null);
	const [loginStatus, setLoginStatus] = useState(false || localStorage.getItem('loginStatus'));
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
		const loggedInUser = localStorage.getItem('user');
		if (loggedInUser) {
			const foundUser = JSON.parse(loggedInUser);
			setCurrentUser(foundUser);
		}
	}, []);


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
						reviews,
						setReviews,
					}}>
					<Route path='/' render={() => <Header />} />
					<User user={user} setCurrentUser={setCurrentUser} />
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
						<Route
							exact
							path='/parks/:id'
							render={() => <ParkDetail parks={parks} user={user} />}
						/>

						{/* <Route path='/parks'>
							<div className='no-parks'>Hello</div>
						</Route> */}
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
