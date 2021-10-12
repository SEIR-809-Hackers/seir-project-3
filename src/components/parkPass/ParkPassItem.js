import React from 'react';
import {Link} from 'react-router-dom'
import MainList from '../styles/list';
import { useContext } from 'react';
import { DataContext } from '../../DataContext';
import noParks from '../../assets/no-parks.jpg'


function ParkPassItem({user}) {
	const { currentUser, setCurrentUser } = useContext(DataContext);
    let parks = currentUser.myParks

	if (parks.length < 1) {
		return (
			<div>
				<div className='no-parks-image'>
					<h3>Add Parks To Get Started!</h3>
					<img className='no-parks' src={noParks}></img>
				</div>
			</div>
		);
		
	}

    return (
			<MainList>
				{parks.map((select) => (
					<Link to='/parks'
						to={'/parks/' + select.park._id}
						style={{ textDecoration: 'none' }}>
						<p>{select.park.parkName}</p>
                        {select.seen ? <p>(hiked)🥾</p> : <p>(want to see)🏔</p>}
					</Link>
				))}	
			</MainList>
		);
}

export default ParkPassItem;