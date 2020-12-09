import React, {Component} from 'react';
import './AllPosts.css'

import Post from "../post/Post";
import {PostServices} from "../services/PostServices";

class AllPosts extends Component {

    state = { posts: false }
    PostServices = new PostServices()

    componentDidMount() {
        this.PostServices.getAllPosts().then(posts => this.setState({ posts}))
    }

   render() {
        const {posts} = this.state;
       return (
           <div className='blockUsers'>
               {posts && posts.map(value => <Post post={value} key={value.id}/>)}
           </div>
       );
   }
}

export default AllPosts;
