import React from 'react';
import UserForm from './UserForm';
import {Link} from 'react-router-dom'
import MainUser from '../styles/user';
import {useEffect} from 'react'

function User({user, setUser}) {

    // let id = user[0]["_id"]
    return (
			<MainUser>
                {user.map((user) =>(
                    <p>{user.name}</p>
                ))}
				{/* {
					(user = false ? (
						<UserForm setUser={setUser} />
					) : (
						<Link to={'/parkpass/' + user[0]['_id']} style={{ textDecoration: 'none' }}>
							<h3>{user[0].name}</h3>
						</Link>
					))
				} */}
			</MainUser>
		);
}

export default User;