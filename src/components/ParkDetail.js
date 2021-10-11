import React from 'react';
import { act } from 'react-dom/test-utils';
import { useParams } from 'react-router-dom';
import PrimaryButton from './styles/Buttons';
import MainPark from './styles/park';
import axios from 'axios';
import { useContext } from 'react';
import { DataContext } from '../DataContext';
import Carousel from 'react-bootstrap/Carousel'
// import { Carousel } from 'react-responsive-carousel'
// import '
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselContainer from './CarouselContainer'


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
		console.log(JSON.parse(localStorage.getItem('token')));
		console.log(id.id);
		console.log(userId);
		try {
			const res = await fetch(
				seenUrl,
				{
					'Content-Type': 'application/json',
					method: 'PUT',
					headers: {
						Authorization: `Bearer ${JSON.parse(
							localStorage.getItem('token')
						)}`,
					},
				}
			);
			console.log(res);
		} catch (error) {
			console.log(error.response.data);
		}
	}

	async function setWantToSee(event) {
		event.preventDefault();
		try {
			console.log(localStorage.getItem('token'));
			const res = await fetch(
				url,
				{
					'Content-Type': 'application/json',
					method: 'PUT',
					headers: {
						Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
					},
				}
			);
			console.log(res);
		} catch (error) {
			console.log(error.response.data);
		}
		
	}
    
	
	 return (
			<MainPark>
				<div className='container'>
					<div className='centered'>
						<h3>{selectPark.parkName}</h3>
					</div>
					<CarouselContainer selectPark={selectPark}/>
					{/* <Carousel>
						{selectPark.images.map(image => {
							<div>
								<img src={image.url}></img>
							</div>
						})}
					</Carousel> */}
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
