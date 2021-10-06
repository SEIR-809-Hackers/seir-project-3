import React from 'react';
import ParkPassItem from './ParkPassItem';
import ParkReviews from './ParkReviews';

function ParkPassList(props) {
    return (
        <div>
            <ParkPassItem/>
            <ParkReviews/>
        </div>
    );
}

export default ParkPassList;