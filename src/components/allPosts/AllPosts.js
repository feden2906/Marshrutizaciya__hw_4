import React from 'react';
import './AllPosts.css'

import Post from "../post/Post";

const AllPosts =({posts, flag})=> {

    return (
        <div className='blockUsers'>
          {flag && posts.map(value => <Post post={value} key={value.id}/>)}
        </div>
    );
}

export default AllPosts;
