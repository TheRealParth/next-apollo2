import React from 'react';
import UserPic from './UserPic';
export default class UsernameField extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
  }
  handleKey = (e)=>{
    if(e.charCode == 13 && e.target.value){
      this.props.setUsername(e.target.value)
      console.log(e.target.value)
      e.target.value = "";
    }

  }
  render = () => {
        if(this.props.username){
          return (
            <div className="col s12">
              <div className="row">
              <span style={{fontSize: .5 + "em", float: 'left'}}>  {this.props.username}</span>

                <div className="col sm2">
                  <UserPic style={{width: 40 + "px", marginTop: 10 + "px"}} username={this.props.username} />
                </div>
              </div>

            </div>)
        } else {
          return (
            <div className="input-field col s6">

              <i style={{fontSize: 35 + 'px'}} className="material-icons huge">account_circle</i>
              <label style={{color: '#ffffff'}} htmlFor="icon_prefix">Username</label>
              <input onKeyPress={this.handleKey}  id="icon_prefix" type="text" className="validate" />

            </div>
        );
      };
  }
}
