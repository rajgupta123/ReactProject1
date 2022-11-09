import logo from './logo.svg';
import './App.css';
import CreateBook from './Component/CreateBook';
import Showbook from './Component/Showbook';
import DeleteBook from './Component/DeleteBook';
import UpdateBook from './Component/UpdateBook';
import Search from './Component/Search';
import SignIn from './Users/SignIn';
import Inbox from './Users/Inbox';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/" >SignIn</Link><br></br>
      <Link to="/CreateBook" >CreateBook</Link><br></br>
      <Link to="/Showbook" >Showbook</Link><br></br>
      <Link to="/Search" >Search</Link><br></br>
      <Link to="/DeleteBook" >DeleteBook</Link><br></br>
      <Link to="/UpdateBook" >UpdateBook</Link><br></br>
      <Link to="/Inbox" >Inbox</Link><br></br>
     <Routes>
      <Route path=''  element={<SignIn/>} ></Route>
      <Route path='/CreateBook'  element={<CreateBook/>} ></Route>
      <Route path='/Showbook'  element={<Showbook/>} ></Route>
      <Route path='/Search'  element={<Search/>} ></Route>
      <Route path='/DeleteBook'  element={<DeleteBook/>} ></Route>
      <Route path='/UpdateBook'  element={<UpdateBook/>} ></Route>
      <Route path='/Inbox'  element={<Inbox/>} ></Route>
      </Routes>   
      
      </BrowserRouter>

  
    </div>
  );
}

export default App;
