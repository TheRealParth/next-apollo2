import React from 'react';

export default class UsernameField extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
  }
  render = () => {
        if(this.props.username){
          return (<h4>Welcome, {this.props.username}.</h4>)
        } else {
          return (
              <div className="input-field col s6">
                <i className="material-icons prefix"></i>
                <input id="icon_prefix" type="text" className="validate"/>
                <label >Username</label>
              </div>
        );
      };
  }
}
