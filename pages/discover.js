import App from '../components/App'
import Link from 'next/link'
import React from 'react';
import withData from '../lib/withData';
import PostList  from '../datastuff/PostList.js';
export default withData((props) => (
    <App data={props}>
      <div className="container col m8">
      <h3>Discover</h3>
      <div className="col s12 m8 offset-m2 l6 offset-l3">
        <PostList />
      </div>
    </div>
    </App>
))
