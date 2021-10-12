import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../../DataContext';
import './ParkPass.css';
import hiked from '../../assets/hikedstamp.png';
import nothiked from '../../assets/NotHiked.png';
import noParks from '../../assets/no-parks.jpg';

function ParkPassItem({ user }) {
	const { currentUser, setCurrentUser } = useContext(DataContext);
	let parks;
	let displayImage;
	if (currentUser) {
		parks = currentUser.myParks;
		// displayImage = currentUser.myParks.images[0].url;
	}

	async function setHiked(event) {
		if (currentUser) {
			const id = event.target.park;
			const userId = currentUser._id;
			let seenUrl = `https://fast-springs-20221.herokuapp.com/parks/parksSeen/${id}/users/${userId}`;
			event.preventDefault();
			console.log(JSON.parse(localStorage.getItem('token')));
			console.log(id);
			console.log(userId);
			try {
				const res = await fetch(seenUrl, {
					'Content-Type': 'application/json',
					method: 'PUT',
					headers: {
						Authorization: `Bearer ${JSON.parse(
							localStorage.getItem('token')
						)}`,
					},
				});
				console.log(res);
			} catch (error) {
				console.log(error.response.data);
			}
		}
	}

	if (currentUser && parks === []) {
		return (
			<div>
				<div className='no-parks-image'>
					<h3>
						<Link to='/parks'>Add Parks To Get Started!</Link>
					</h3>

					<img className='no-parks' src={noParks}></img>
				</div>
			</div>
		);
	}

	return (
		<div className='list-select-parks'>
			<h2>My Parks:</h2>
			{parks !== undefined ? (
				parks.map((select) => (
					<Link
						to={'/parks/' + select.park._id}
						style={{ textDecoration: 'none', color: 'white' }}>
						<div className='each-park'>
							<button className='delete-park'>❌</button>
							<h4>{select.park.parkName}</h4>
							{select.seen ? (
								<img className='stamp' src={hiked} />
							) : (
								<img src={nothiked} className='stamp' />
							)}
							{/* <div className='img-container container'>
								<img
									className='park-preview'
									src={select.park.images[0].url}></img>
							</div> */}
							<button park={select.park._id} onClick={setHiked}className='btn hiked'>Hiked</button>
						</div>
					</Link>
				))
			) : (
				<h2>Add Parks</h2>
			)}
		</div>
	);
}

export default ParkPassItem;
