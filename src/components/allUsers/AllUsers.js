import React from 'react';
import './AllUsers.css'
import User from "../User/User";

const AllUsers = ({users, flag}) => {
    return (
        <div className='blockUsers'>
            {flag && users.map(value => <User user={value} key={value.id}/>)}
        </div>
    );
}

export default AllUsers;
