import React from 'react';
import ParkItem from './ParkItem';
import { useEffect } from 'react';

function ParkList({parks}) {

    return (
        <div>
            <ParkItem parks={parks}/>
        </div>
    );
}

export default ParkList;