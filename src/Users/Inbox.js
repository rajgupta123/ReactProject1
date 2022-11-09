import React, { Component } from 'react'
import LogOut from './LogOut';
export default class Inbox extends Component {

    constructor(props) {
      super(props)
     
    
      this.state = {
         username:''
      }
    }
componentDidMount()
{
   
}
  render() {
    if(sessionStorage.getItem('Username')==null)
    {
        window.location="/";

    }
    else{
        this.state.username= sessionStorage.getItem('Username');
    } 
    return (
      <>
      
      <div>Welcome{this.state.username} @hexaware.com This is My Inbox Page</div><LogOut></LogOut></>
    )
    
    

  }
}
