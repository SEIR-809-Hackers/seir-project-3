import React from 'react';
import ParkPassList from './ParkPassList';
import { useContext } from 'react';
import { DataContext } from '../../DataContext';
import hiking from '../../assets/9831.jpg';
import './ParkPass.css'

function ParkPass() {
    const { currentUser, setCurrentUser } = useContext(DataContext);
  
    return (
			<div className='container'>
				<div className='divide'>
					<h3>Get Hiking!</h3>
					<img className='hiking' src={hiking} alt='People Hiking'></img>
				</div>
				<div className='welcome'>
					<h2>{currentUser.username}'s Parks: </h2>
				</div>
				<ParkPassList />
			</div>
		);
}

export default ParkPass;