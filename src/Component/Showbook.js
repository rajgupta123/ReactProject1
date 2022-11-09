import React, { Component } from 'react'
import axios from 'axios'
export default class Showbook extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Books:[]
      }
    }
    DisplayAllBooks()
    {
        let url="https://localhost:44320/api/Books/";
        axios.get(url).then(resp=>{
           // alert(resp.data);
            this.setState({Books:resp.data});
        }).catch(error=>{
            console.warn(error);
        })

    }
    componentDidMount()
    {
        this.DisplayAllBooks();
    }
  render() {
    const {Books}=this.state;
    return (
      <div>Showbook
<table>
    <tr>
        <th>Book Id</th>
        <th>Book Title</th>
        <th>Book description</th>
    </tr>
    {
        Books.map(a=>
            <tr>
                <td>{a.id}</td>
                <td>{a.title}</td>
                <td>{a.description}</td>
            </tr>
        )
    }
</table>

      </div>
    )
  }
}
