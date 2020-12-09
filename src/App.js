import React, {Component} from 'react';
import './App.css'
import Header from "./components/header/Header";
import {UserServices} from "./components/services/UserServices";
import {PostServices} from "./components/services/PostServices";

import {
  BrowserRouter as Router, Switch, Route, NavLink
} from "react-router-dom";

import AllUsers from "./components/allUsers/AllUsers";
import AllPosts from "./components/allPosts/AllPosts";

class App extends Component {

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
      users, usersFlag: 'loaded',
      posts, postsFlag: 'loaded'
    })
  }

  render() {
    const {users, usersFlag, posts, postsFlag} = this.state
    return (
        <div>
          <Header Router={Router} NavLink={NavLink}/>
          <Router>
            <Switch>
              <Route path={'/Користувачі'} render={() => <AllUsers users={users} flag={usersFlag}/>}/>
              <Route path={'/Пости'} render={() => <AllPosts posts={posts} flag={postsFlag}/>}/>
              {/*<Route path={'/Фото'} component={}/>*/}
              {/*<Route path={'/Коменти'} component={}/>*/}
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;