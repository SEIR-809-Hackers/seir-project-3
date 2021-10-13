import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../../DataContext';
import './ParkPass.css';
import hiked from '../../assets/hikedstamp.png';
import nothiked from '../../assets/NotHiked.png';
import noParks from '../../assets/no-parks.jpg';
import {useToasts} from 'react-toast-notifications'
import hiking from '../../assets/9831.jpg';

function ParkPassItem({ user }) {
	const { currentUser, updateParks } = useContext(DataContext);
	const { addToast } = useToasts();
	let parks;
	let hikedParks;
	if (currentUser && currentUser.myParks) {
		parks = currentUser.myParks;
		hikedParks = currentUser.myParks.filter((park) => {
			return park.seen === true;
		});
	}

	async function deletePark(event) {
		event.preventDefault()
		const id = event.target.attributes.park.value;
		const userId = currentUser._id;
		const deleteUrl = `https://fast-springs-20221.herokuapp.com/parks/deletePark/${id}/users/${userId}`
		try {
			await fetch(deleteUrl, {
				'Content-Type': 'application/json',
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
				},
			});

			updateParks(event)
			addToast('Park Deleted! 😢', {
				appearance: 'success',
				autoDismiss: true,
				autoDismissTimeout: 3000,
			});
		} catch (error) {
			addToast('Error! Request Denied. Try Again. 😢', {
				appearance: 'error',
				autoDismiss: true,
				autoDismissTimeout: 3000,
			});
		}
		
	}

	async function setHiked(event) {
		if (currentUser) {
			const id = event.target.attributes.park.value;
			const userId = currentUser._id;
			let seenUrl = `https://fast-springs-20221.herokuapp.com/parks/parksSeen/${id}/users/${userId}`;
			event.preventDefault();
			try {
			 	await fetch(seenUrl, {
					'Content-Type': 'application/json',
					method: 'PUT',
					headers: {
						Authorization: `Bearer ${JSON.parse(
							localStorage.getItem('token')
						)}`,
					},
				});
				updateParks(event);
			} catch (error) {
				addToast('Error! Request Denied. Try Again. 😢', {
					appearance: 'error',
					autoDismiss: true,
					autoDismissTimeout: 3000,
				});
			}
		}
	}

	if (parks === undefined) {
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
		<div>
			<div className='container'>
				<div className='divide'>
					<h3>Get Hiking!</h3>
					<img className='hiking' src={hiking} alt='People Hiking'></img>
				</div>
				<div className='welcome'>
					<h2>{currentUser.username}'s Parks: </h2>
					{currentUser ? (
						<div className='hiked-number'>
							<p className='hiked-number'>
								Parks Hiked: {hikedParks.length}/{currentUser.myParks.length}
							</p>
						</div>
					) : <div></div>}
				</div>
				{/* <ParkPassList /> */}
			</div>
			
			{currentUser && parks !== undefined ? (
				parks.map((select) => (
					<Link
						to={'/parks/' + select.park._id}
						style={{ textDecoration: 'none', color: 'white' }}>
						<div className='ticket-container'>
							<div className='image-container'>
								<h2>{select.park.parkName}</h2>
							</div>
							<div className='ticket-info'>
								<div className='location'>
									<p>📍 {select.park.parkLocation}</p>
								</div>
								<div className='hiked'>
									{select.seen ? (
										<img alt='hiked stamp' className='stamp' src={hiked} />
									) : (
										<img
											alt='not hiked stamp'
											src={nothiked}
											className='stamp'
										/>
									)}
								</div>
								<div className='park-btn'>
									{!select.seen ? (
										<button
											park={select.park._id}
											onClick={setHiked}
											className='btn hiked-btn'>
											Hiked
										</button>
									) : (
										<button park={select.park._id} className='btn hiked-btn'>
											View
										</button>
									)}
									<button
										onClick={deletePark}
										park={select.park._id}
										className='delete btn'>
										Delete
									</button>
								</div>
							</div>
						</div>
					</Link>
				))
			) : (
				<div></div>
			)}
			;
		</div>
	);
}

export default ParkPassItem;
