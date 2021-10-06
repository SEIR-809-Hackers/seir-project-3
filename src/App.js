import './App.css';
import Header from './components/header/Header';
import Home from './components/Home';
import ParkList from './components/parkList/ParkList';
import ParkDetail from './components/ParkDetail';
import { Switch, Route, Redirect } from 'react-router-dom';
import {useState, useEffect} from 'react';
import ParkPass from './components/parkPass/ParkPass';

//testing json
import DataPark from './dataPark.json'
import DataReview from './dataReview.json'
import DataUser from './dataUser.json'

function App() {

  const[parks,setParks] = useState(DataPark)
  const[user,setuser] = useState(DataUser)
  const[reviews, setReviews] = useState(DataReview)

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])


  return (
		<>
			<div className='App'>
				<Route path='/' render={() => <Header user={user} setuser={setuser} />}/>
				<Route path='/' render={() => <ParkList parks={parks} setParks={setParks} />}/>
				<Route exact path='/' render={() => <Home parks={parks} />} />
				<Route path='/parks/:id' render={() => <ParkDetail parks={parks} />} />
				<Route path='/parkpass' render={() => <ParkPass parks={parks} setParks={setParks} user={user} reviews={reviews} setReviews={setReviews}/>} />
        
			</div>
		</>
	);
}

export default App;
