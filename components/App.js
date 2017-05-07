import Header from './Header';
import Loader from './loader';
import React from 'react';

export default class extends React.Component {
  static async getInitialState(state){
    console.log("HAVE STATE")
    console.log(state)
  }
  constructor(props){
    super(props)
  }
  componentDidMount(){
    window.jQuery = require("jquery");
    window.$ = require("jquery");
    require("../static/materialize.min.js");
  }
  render() {
    return(
      <main className="darken-2">
        {/* if(process.Window){
          var thing = createFragment(<Loader style={{display: document.readyState === "complete" ? "none" : "block"}}/>) */}


          <Header pathname={this.props.data.url.pathname} username={this.props.data.username}/>
          <div className="container">

          { this.props.children }

          </div>
      </main>
    )
  }
}
