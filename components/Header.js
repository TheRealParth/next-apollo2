import Link from 'next/link'
import React from 'react';
import UsernameField from './usernameField';
export default class Header extends React.Component {
  constructor(props){
    super(props);
  }
  // shouldComponentUpdate(nextProps, nextState){
  //   return this.props != nextProps;
  // }
  render (){
    return (<nav className="blue darken-1">
      <div className="nav-wrapper">
        <div href="#" className="brand-logo right">
          <UsernameField username={this.props.username} /></div>
        <ul id="nav" className="left hide-on-med-and-down">
          <li className={this.props.pathname === '/' && 'active'}>
                <Link  prefetch href='/'>
              			<a >Home </a>
          			</Link>
          </li>
          <li className={this.props.pathname  === '/discover' && 'active'}>
          <Link  prefetch href='/discover'>
              <a >Discover</a>
            </Link>
          </li>
          <li className={this.props.pathname  === '/about' && 'active'}>
          <Link  prefetch href='/about'>
              <a >About</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>)
  }
}
