import React, {Component} from 'react';
import './NavItem.css'

import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";

import AllUsers from "../allUsers/AllUsers";
import AllPosts from "../allPosts/AllPosts";
import {UserServices} from "../services/UserServices";
import {PostServices} from "../services/PostServices";

class NavItem extends Component {

  state = {
    users: [], usersFlag: '',
    posts: [], postsFlag: ''
  }
  UserServices = new UserServices()
  PostServices = new PostServices()

  async componentDidMount() {
    let users = await this.UserServices.getAllUsers()
    let posts = await this.PostServices.getAllPosts()
    this.setState({
      users, usersFlag: 'show',
      posts, postsFlag: 'show'
    })
  }

  render() {
    const {users, usersFlag, posts, postsFlag} = this.state
    const {item} = this.props
    return (
        <Router>
          <div>
            <Link to={`/${item}`}><h2>{item}</h2></Link>

            <Switch>
              <Route path={'/Користувачі'}> <AllUsers users={users} flag={usersFlag}/> </Route>
              <Route path={'/Пости'}> <AllPosts posts={posts} flag={postsFlag}/> </Route>
              {/*<Route path={'/Фото'} component={}/>*/}
              {/*<Route path={'/Коменти'} component={}/>*/}
            </Switch>
          </div>
        </Router>
    )
  }
}

export default NavItem;