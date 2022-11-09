import React, { Component } from 'react'
import axios from 'axios'


export default class Search extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id:'',
         title:'',
         description:''
         

      }
      this.handleChange=this.handleChange.bind(this);
      this.SearchBook=this.SearchBook.bind(this);
    }
    SearchBook()
    {
       // e.preventDefault();
        let id=this.state.id;
        let url="https://localhost:44320/api/Books/"+id;
        axios.get(url).then(resp=>{
     // alert(this.data.id);
            this.setState({
                id:resp.data.id,
                title:resp.data.title,
                description:resp.data.description
            });
           
        }).catch(error=>{
            console.warn(error);
        })
    }
    handleChange(object)
    {
        this.setState(object);

    }

  render() {
    const{id}=this.state;
    const {title}=this.state;
    const {description}=this.state;
    return (
      <div>Search
          <label>Enter the Book Id</label>
        <input type="text" name="id" onChange={(e)=>this.handleChange({id:e.target.value})}></input>
    <button onClick={this.SearchBook}>Delete</button>
    <table>
    <tr>
        <th>Book Id</th>
        <th>Book Title</th>
        <th>Book description</th>
    </tr>
   
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{description}</td>
            </tr>
  
</table>
      </div>
    )
  }
}
