import App from '../components/App'
import withData from '../lib/withData';

import Link from 'next/link'
import React from 'react';
import PostList from '../components/PostList';

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }
  shouldComponentUpdate(nextProps, nextState){
    return this.props != nextProps;
  }
  render (){

    return (<App pathname={this.props.url.pathname}>
      <h3>Discover</h3>
      {JSON.stringify(this.props)}

    </App>)
  }
}
