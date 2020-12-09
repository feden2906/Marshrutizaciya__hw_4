import React, {Component} from 'react';
import './AllUsers.css'
import User from "../User/User";
import {UserServices} from "../services/UserServices";


class AllUsers extends Component{
    state = { users: false }
    UserServices = new UserServices()

    componentDidMount() {
        this.UserServices.getAllUsers().then(users => this.setState({ users}))
    }
    render() {
        const {users} = this.state;
        return (
            <div className='blockUsers'>
                {users && users.map(value => <User user={value} key={value.id}/>)}
            </div>
        );
    }
}

export default AllUsers;
