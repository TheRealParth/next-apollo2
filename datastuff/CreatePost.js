import React from 'react';

export default class CreatePost extends React.Component {

  constructor(props){
    super(props)

  }
  componentDidMount(){

  }
  getUser(){
   if(process.browser)
    {
      return {
        id: window.localStorage.getItem("id") ? window.localStorage.getItem("id") : false,
        username: window.localStorage.getItem("username") ? window.localStorage.getItem("username") : false,
        firstName:  window.localStorage.getItem("firstName") ? window.localStorage.getItem("firstName") : false,
        lastName: window.localStorage.getItem("lastName") ? window.localStorage.getItem("lastName") : false,
        longitude: window.localStorage.getItem("longitude") ? window.localStorage.getItem("longitude") : false,
        latitude: window.localStorage.getItem("latitude") ? window.localStorage.getItem("latitude") : false,
      }
    }
    else return false;
  }
  getValidClassNames(field){
    return ({'validate': true, 'valid' : this.getUser()[field] ? true : false})
  }
  getInitialValue(field){
    return (this.getUser()[field] ? this.getUser()[field] : "")
  }
  setValue(e, value){
    console.log(e)
    console.log(value)
    if(process.browser){

    }
  }
  clearField(field){

  }
  render() {
    return(
<div>
  <div className="col s6" className="col s6 blue z-depth-5" style=
    {{
    float: 'right',
    height: 200 + 'px',
    zIndex: 10,
    width: 450 + 'px',
    position: 'fixed',
    right: 275 + 'px',
    color: '#ffffff',
    top: 130 + 'px',
    borderRadius: 8+'px'
  }}>

  </div>
<div className="row">
  <form className="col s12">
    <div className="row">
      <div className="input-field col s4">
        <input id="first_name" type="text" onKeyPress={(e)=>{this.setValue(e,'firstName')}} className={this.getValidClassNames('firstName')} defaultValue={this.getInitialValue('firstName')} />
        <label htmlFor="first_name">First Name</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s4">
        <input id="last_name" type="text" className={this.getValidClassNames('lastName')} defaultValue={this.getInitialValue('lastName') } />
        <label htmlFor="last_name">Last Name</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s4">
        <input className={this.getValidClassNames('username')} defaultValue={this.getInitialValue('username')} id="username" type="text"  />
        <label htmlFor="username">Username</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s4">
        <input id="title" type="text" className="validate" />
        <label htmlFor="post_title">Post Title</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s4">
        <input id="last_name" type="text" className="validate" />
        <label htmlFor="post_body">Post Body</label>
      </div>
    </div>
  </form>
</div>
</div>
    )
  }
}
