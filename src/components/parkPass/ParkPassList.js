import React from 'react';
import ParkPassItem from './ParkPassItem';
import ParkReviews from './ParkReviews';
// import MainList from '../styles/list';
import { useContext } from 'react';
import { DataContext } from '../../DataContext';

function ParkPassList({user, reviews, setReview}) {
    const { currentUser, setCurrentUser } = useContext(DataContext);
    
    return (
        <div>
            <ParkPassItem/>
            {/* <ParkReviews user={user} reviews={reviews} setReview={setReview}/> */}
        </div>
    );
}

export default ParkPassList;