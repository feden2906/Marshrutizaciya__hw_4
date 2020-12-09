import React, {Component} from 'react';
import './App.css'
import Header from "./components/header/Header";
import {UserServices} from "./components/services/UserServices";
import {PostServices} from "./components/services/PostServices";

import {Switch, Route} from "react-router-dom";

import AllUsers from "./components/allUsers/AllUsers";
import AllPosts from "./components/allPosts/AllPosts";

class App extends Component {

    state = {
        users: [], usersFlag: '',
        posts: [], postsFlag: ''
    }

    UserServices = new UserServices()
    PostServices = new PostServices()

    componentDidMount() {
        this.UserServices.getAllUsers().then(users => this.setState({ users, usersFlag: 'loaded',}))
        this.PostServices.getAllPosts().then(posts => this.setState({ posts, postsFlag: 'loaded'}))
    }

    render() {
        const {users, usersFlag, posts, postsFlag} = this.state
        return (
            <div>
                <Header/>

                <Switch>
                    <Route path={'/Користувачі'} render={() => <AllUsers users={users} flag={usersFlag}/>}/>
                    <Route path={'/Пости'} render={() => <AllPosts posts={posts} flag={postsFlag}/>}/>
                    {/*<Route path={'/Фото'} component={}/>*/}
                    {/*<Route path={'/Коменти'} component={}/>*/}
                </Switch>

            </div>
        );
    }
}

export default App;
