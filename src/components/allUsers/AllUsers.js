import React, {Component} from 'react';
import './AllUsers.css'
import User from "../User/User";

class AllUsers extends Component {

  render() {
    const {users, flag} = this.props
    return (
        <div className='blockUsers'>
          {flag && users.map(value => <User user={value} key={value.id}/>)}
        </div>
    );
  }
}

export default AllUsers;