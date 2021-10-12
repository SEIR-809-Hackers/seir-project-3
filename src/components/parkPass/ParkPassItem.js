import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../../DataContext';
import './ParkPass.css';
import hiked from '../../assets/hikedstamp.png';
import nothiked from '../../assets/NotHiked.png';
import noParks from '../../assets/no-parks.jpg';
import {useToasts} from 'react-toast-notifications'

function ParkPassItem({ user }) {
	const { currentUser, updateParks } = useContext(DataContext);
	const { addToast } = useToasts();
	let parks;
	if (currentUser) {
		parks = currentUser.myParks;
	}

	async function deletePark(event) {
		event.preventDefault()
		const id = event.target.attributes.park.value;
		const userId = currentUser._id;
		const deleteUrl = `https://fast-springs-20221.herokuapp.com/parks/deletePark/${id}/users/${userId}`
		try {
			console.log(localStorage.getItem('token'));
			const res = await fetch(deleteUrl, {
				'Content-Type': 'application/json',
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
				},
			});
			console.log(res)
			updateParks(event)
			addToast('Park Deleted! 😢', {
				appearance: 'success',
				autoDismiss: true,
				autoDismissTimeout: 3000,
			});
		} catch (error) {
			console.log(error.response.data);
		}
		
	}

	async function setHiked(event) {
		if (currentUser) {
			console.log(event)
			const id = event.target.attributes.park.value;
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
				updateParks(event);
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

					<img className='no-parks' alt='noParks' src={noParks}></img>
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
							<button
								onClick={deletePark}
								park={select.park._id}
								className='delete-park'>
								❌
							</button>
							<h4>{select.park.parkName}</h4>
							{select.seen ? (
								<img alt='hiked stamp' className='stamp' src={hiked} />
							) : (
								<img alt='not hiked stamp' src={nothiked} className='stamp' />
							)}
							{!select.seen ? (
								<button
									park={select.park._id}
									onClick={setHiked}
									className='btn hiked'>
									Hiked
								</button>
							) : (
								<button
									park={select.park._id}
									className='btn hiked'>
									Done
								</button>
							)}
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
