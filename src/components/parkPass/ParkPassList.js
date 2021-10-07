import React from 'react';
import ParkPassItem from './ParkPassItem';
import ParkReviews from './ParkReviews';
// import MainList from '../styles/list';

function ParkPassList({user, reviews, setReview}) {
    return (
        <div>
            <ParkPassItem user={user}/>
            {/* <ParkReviews user={user} reviews={reviews} setReview={setReview}/> */}
        </div>
    );
}

export default ParkPassList;