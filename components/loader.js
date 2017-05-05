import React from 'react';
import Router from 'next/router';


export default class extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
  }
  componentWillReceiveProps(nextProps){
    
  }
  render = () => {

      return(
        <div className="progress">
            <style jsx>{`
              div.progress: {
                margin: 0px;
              }
          `}</style>
                  <div className="indeterminate"></div>
        </div>);
  }
}
