import React from 'react';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { DataContext } from '../../DataContext';
import './ParkPass.css'
import hiked from '../../assets/hikedstamp.png'
import nothiked from '../../assets/NotHiked.png'


function ParkPassItem({user}) {
	const { currentUser, setCurrentUser } = useContext(DataContext);
    let parks = currentUser.myParks

    return (
			<div className="list-select-parks">
				<h2>My Parks:</h2>
				{parks.length ? 
				parks.map((select) => (
					<Link
						to={'/parks/' + select.park._id}
						style={{ textDecoration: 'none', color: "white" }}>
						<div className="each-park">	
						<h4>{select.park.parkName}</h4>
                        {select.seen ? <img className='stamp'src={hiked}/> : <img src={nothiked} className='stamp'/>}
						<button className="delete-park">❌</button>
						</div>
					</Link>
				)) :
				<h2>Add Parks</h2>
				}
				{}
			</div>
		);
}

export default ParkPassItem;