import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../../DataContext';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {useToasts} from 'react-toast-notifications'

function ParkDetail({ parks, user }) {
	const { currentUser, updateParks } = useContext(DataContext);
	const id = useParams();
	const { addToast } = useToasts();

	let selectPark = parks.find((park) => {
		return id.id === park._id;
	});

	
	async function setWantToSee(event) {
		event.preventDefault();
		if (currentUser) {
			const userId = currentUser._id;
			let url = `https://fast-springs-20221.herokuapp.com/parks/wantToSee/${id.id}/users/${userId}`;
			try {
				const res = await fetch(url, {
					'Content-Type': 'application/json',
					method: 'PUT',
					headers: {
						Authorization: `Bearer ${JSON.parse(
							localStorage.getItem('token')
						)}`,
					},
				});
				if (res) {
					addToast('Added Park to your ParkPass!', {appearance: 'success',autoDismiss: true,autoDismissTimeout: 1500})
					updateParks(event)

				}
				;
			} catch (error) {
				console.log(error.response.data);
			}
		}
	}

	if (selectPark === undefined) {
		return <h1>Pick A Park to Get Started!</h1>;
	}

	return (
		<div>

			<div className='container'>
				<Carousel
					showArrows={true}
					autoPlay={true}
					infiniteLoop={true}
					stopOnHover={true}
					transitionTime={5}
					width={'70vw'}>
					{selectPark.images.length
						? selectPark.images.map((image) => {
								return (
									<div className='carousel'>
										<img alt={`${image.title}`} className='slide-img' src={`${image.url}`} />
										<p className='legend'>{image.title}</p>
									</div>
								);
						  })
						: 'No Images to Display'}
				</Carousel>

				<div className='detail-container'>
					<div className='park-container'>
						<div className='centered'>
							<h3 className='title'>{selectPark.parkName}</h3>
						</div>
						<div className='park-details'>
							<p>{selectPark.parkDetails}</p>
						</div>
						<div className='acts'>
							{!selectPark.activities.length ? (
								<div>
									<h3>Activities:</h3>
									<div className='activities'>
										<p className='activity-item'>No Activities Listed</p>
									</div>
								</div>
							) : (
								<div className='act-main'>
									<h3>Activities:</h3>

									<div className='activities'>
										{selectPark.activities.map((act) => (
											<p className='activity-item'>{act.name}</p>
										))}
									</div>
								</div>
							)}
						</div>
						<div>
							{currentUser === undefined ? (
								''
							) : (
								<div className='buttons'>
									<button onClick={setWantToSee} className='btn see'>
										WANT TO SEE ⛰
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ParkDetail;
