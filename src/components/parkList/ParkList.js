import React from 'react';
import ParkItem from './ParkItem';
import { useEffect } from 'react';
import MainList from '../styles/list';



function ParkList({parks}) {

    return (
        <MainList>
            <ParkItem parks={parks}/>
        </MainList>
    );
}

export default ParkList;