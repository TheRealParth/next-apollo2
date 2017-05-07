import Header from './Header';
import Loader from './loader';
import React from 'react';

export default class extends React.Component {

  constructor(props){
    super(props)

  }
  componentDidMount(){
    window.jQuery = require("jquery");
    window.$ = require("jquery");
    require("../static/materialize.min.js");
    // console.log(this.props.data.username)
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log("Success!");
      console.log(position)
    }, ()=>{
      console.log("failure")
    });
  }
  setUsername(username){
    window.localStorage.setItem("username", username);
  }

  getUsername(){
    if(process.browser) return window.localStorage.getItem("username") ? window.localStorage.getItem("username") : false;
  }
  render() {
    return(
      <main className="darken-2">
        {/* if(process.Window){
          var thing = createFragment(<Loader style={{display: document.readyState === "complete" ? "none" : "block"}}/>) */}


          <Header pathname={this.props.data.url.pathname} setUsername={this.setUsername} username={this.getUsername}/>
          <div className="container">

          { this.props.children }

          </div>
      </main>
    )
  }
}
