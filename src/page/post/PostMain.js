import React from 'react';
import PostList from './PostList';
import { Link } from 'react-router-dom';

const PostMain = props => {
  return (
    <div>
      <h2 align="center">종현이의 블로그</h2>
      <Link to="/Loginpage">로그인</Link>
      <PostList />
     
    </div>
  );
};

export default PostMain;