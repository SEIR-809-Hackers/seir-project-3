import React from 'react';
import ParkPassList from './ParkPassList';
import { useContext } from 'react';
import { DataContext } from '../../DataContext';

function ParkPass() {
    const { currentUser, setCurrentUser } = useContext(DataContext);
    
    if (currentUser) {
        return (
					<div>
						<h1>Hello</h1>
						<h2>{currentUser.username}</h2>
						<ParkPassList />
					</div>
				);

    }
    
}

export default ParkPass;