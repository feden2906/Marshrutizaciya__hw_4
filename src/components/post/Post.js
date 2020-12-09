import React, {Component} from 'react';
import './Post.css'

class Post extends Component {
  render() {
    const {post: {title}} = this.props
    return (
        <div>
          {title}
        </div>
    );
  }
}

export default Post;