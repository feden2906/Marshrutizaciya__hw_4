import React, {Component} from 'react';
import './User.css'

class User extends Component {
  render() {
    const {
      user: {
        name
        // username,
        // email,
        // address: {
        //   street,
        //   suite,
        //   city,
        //   zipcode,
        //   geo: {
        //     lat,
        //     lng
        //   }
        // },
        // phone,
        // website,
        // company: {
        //   name: companyName,
        //   catchPhrase,
        //   bs
        // }
      }
    } = this.props
    return (
        <div>
          <h3>{name}</h3>
          {/*<h4>{username}</h4>*/}
          {/*<h4>{email}</h4>*/}
          {/*<h4>{street}</h4>*/}
          {/*<h4>{suite}</h4>*/}
          {/*<h4>{city}</h4>*/}
          {/*<h4>{zipcode}</h4>*/}
          {/*<h4>{lat}</h4>*/}
          {/*<h4>{lng}</h4>*/}
          {/*<h4>{phone}</h4>*/}
          {/*<h4>{website}</h4>*/}
          {/*<h4>{companyName}</h4>*/}
          {/*<h4>{catchPhrase}</h4>*/}
          {/*<h4>{bs}</h4>*/}
        </div>
    );
  }
}

export default User;