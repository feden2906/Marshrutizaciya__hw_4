import React, {Component} from 'react';
import './AllPosts.css'

import Post from "../post/Post";

class AllPosts extends Component {

  render() {
    console.log(1)
    const {posts, flag} = this.props
    return (
        <div className='blockUsers'>
          {flag && posts.map(value => <Post post={value} key={value.id}/>)}
        </div>
    );
  }
}

export default AllPosts;