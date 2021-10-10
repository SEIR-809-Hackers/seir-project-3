import React from 'react';
import { act } from 'react-dom/test-utils';
import { useParams } from 'react-router-dom';
import PrimaryButton from './styles/Buttons';
import MainPark from './styles/park';
import axios from 'axios';
import { useContext } from 'react';
import { DataContext } from '../DataContext';

function ParkDetail({ parks, user }) {
	const { currentUser, setCurrentUser } = useContext(DataContext);
	const id = useParams();
	const userId = currentUser._id

	let selectPark = parks.find((park) => {
		return id.id === park._id;
	});
	console.log(id)
	console.log(selectPark)

	let url = `https://fast-springs-20221.herokuapp.com/parks/wantToSee/${id.id}/users/${userId}`;
	let seenUrl = `https://fast-springs-20221.herokuapp.com/parks/parksSeen/${id.id}/users/${userId}`;

	async function setHiked(event) {
		event.preventDefault();
		event.preventDefault();
		try {
			let res = await axios.put(seenUrl, {headers: {
				Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
			}})
		} catch (error) {}
	}

	async function setWantToSee(event) {
		event.preventDefault();
		try {
			let res = await axios.put(url, {
				headers: {
					Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
				},
			});
		} catch (error) {}
		
	}

	 return (
			<MainPark>
				<div className='container'>
					<img
						className='park-image'
						src={`${selectPark.images[0].url}`}
						alt='trees'
						style={{ width: '100%' }}
					/>
					<div className='centered'>
						<h3>{selectPark.parkName}</h3>
					</div>
				</div>
				<div className='park-details'>
					<p>{selectPark.parkDetails}</p>
					<div>
						{currentUser === [] ? (
							''
						) : (
							<div>
								<PrimaryButton onClick={setHiked}>HIKED 🥾</PrimaryButton>
								<PrimaryButton onClick={setWantToSee}>
									WANT TO SEE ⛰
								</PrimaryButton>
							</div>
						)}
					</div>
				</div>
				<div className='acts'>
					{!selectPark.activities.length ? null : (
						<div className='act-main'>
							<h3>Activities:</h3>

							<div className='activities'>
								{selectPark.activities.map((act) => (
									<p>{act.name}</p>
								))}
							</div>
						</div>
					)}
				</div>
			</MainPark>
		);
}

export default ParkDetail;
