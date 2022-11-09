import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LogOut extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        
      }
      this.LogOut=this.LogOut.bind(this);
    }
    LogOut()
    {
        if(sessionStorage.getItem("Username")!=null)
        {
            sessionStorage.removeItem("Username");
            window.location="/";
        }

    }
  render() {
    return (
      <div>LogOut

        <button onClick={this.LogOut}>LogOut</button>
      </div>
    )
  }
}
