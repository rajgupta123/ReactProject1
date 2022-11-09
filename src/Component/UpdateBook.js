import React, { Component } from 'react'
import axios from 'axios'
export default class UpdateBook extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
       id:'',
       title:'',
       description:''
      }
      this.UpdateBook=this.UpdateBook.bind(this);
      this.handleChange=this.handleChange.bind(this);
    }
    UpdateBook()
    {
        let id=this.state.id;
        let url="https://localhost:44320/api/Books/"+id;
        axios.put(url,{
            title:this.state.title,
            description:this.state.description

        }).then(response=>{
            alert(response.data);

        }).catch(error=>{
            alert(error);
        });
    }
    handleChange(object)
    {
        this.setState(object);

    }
  render() {
    return (
      <div>UpdateBook

<table border={1} align="center">
        <tr>
            <td>
                <label>BookId</label>
                <input type="text" name="id" onChange={(e)=>this.handleChange({id:e.target.value})}></input>
            </td>
            </tr>
            <tr>
            <td>
                <label>BookTitle</label>
                <input type="text" name="title" onChange={(e)=>this.handleChange({title:e.target.value})}></input>
            </td>
            </tr>
            <tr>
            <td>
                <label>BookDescription</label>
                <input type="text" name="description"                
                onChange={(e)=>this.handleChange({description:e.target.value})}></input>
            </td>
            </tr>
            <tr>
            <td>
               
               <button onClick={this.UpdateBook} >Create</button>
              
            </td>
            </tr>
      

        </table>
      </div>
    )
  }
}
