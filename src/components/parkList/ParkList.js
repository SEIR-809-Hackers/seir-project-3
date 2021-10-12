import React from 'react';
import ParkItem from './ParkItem';

function ParkList({parks}) {

    return (
        <div>
            <ParkItem parks={parks}/>
        </div>
    );
}

export default ParkList;