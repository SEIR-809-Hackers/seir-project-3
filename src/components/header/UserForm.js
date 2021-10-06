import React from 'react';
import {useState} from 'react';


function UserForm({setUser}) {

    let username = null;

    function handleSubmit(event){
        event.preventDefault();
        setUser()
    }

    function handleChange(event){
        event.preventDefault();
        username = event.target.value
    }

    return (
        <div className='user-form'>
            <form onSubmit={handleSubmit}>
                <p>
                    <strong>
                        Username:
                    </strong>
                </p>
                <input type='text'onChange={handleChange}/>
                {/* add pass */}

                <button type='submit'>
                    <strong>LOGIN</strong>
                </button>
            </form>
        </div>
    );
}

export default UserForm;