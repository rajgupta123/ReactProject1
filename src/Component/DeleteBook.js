import React, { Component } from 'react'
import axios from 'axios';

export default class DeleteBook extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id:''
      }
      this.DeleteBook=this.DeleteBook.bind(this);
      this.handlechange=this.handlechange.bind(this);
    }
    DeleteBook()
    {
        let id=this.state.id;
        let url="https://localhost:44320/api/Books/"+id;
        axios.delete(url).then(resp=>{
         alert(resp.data);
            this.setState({Books:resp.data});
            alert("data deleted");
        }).catch(error=>{
            console.warn(error);
        })

    }
    handlechange(object)
    {
        this.setState(object);
    }
  render() {
    return (
      <div>DeleteBook
        <label>Enter the Book Id</label>
        <input type="text" name="id" onChange={(e)=>this.handlechange({id:e.target.value})}></input>
    <button onClick={this.DeleteBook}>Delete</button>
      </div>
    )
  }
}
