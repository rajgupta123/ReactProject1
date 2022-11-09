import React, { Component } from 'react'
import axios from 'axios'
export default class SignIn extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         password:''
      }
      this.submit=this.submit.bind(this);
      this.handlechange=this.handlechange.bind(this);
    }
    submit()
    {
        let url="https://localhost:44320/api/Users";
        axios.post(url,{
            username:this.state.username,
            password:this.state.password

        }).then(response=>{
            if(response.data.username!=null)
            {
           // alert(response.data.username);
            sessionStorage.setItem("Username",response.data.username);
            window.location="/Inbox";
            }
            else
            {
                alert("Username/password is Invalid");
            }

        }).catch(error=>{
            alert(error);
        });


    }
    handlechange(object)
    {
        this.setState(object);

    }
  render() {
    return (
      <div>SignIn
<label>Username</label>
<input type="text" name="username" onChange={(e)=>this.handlechange({username:e.target.value})}></input>
   

<label>Password</label>
<input type="text" name="password" onChange={(e)=>this.handlechange({password:e.target.value})}></input>
<button onClick={this.submit}>submit</button> 



      </div>
    )
  }
}
