import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import Add from './components/Add';
import Navbar from './components/Navbar';
import News from './components/Pages/News'
import Contact from './components/Pages/Contact'
import About from './components/Pages/About'
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import View_users from './components/users/View_users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/add" element={<Add/>}/>
        <Route exact path="/news" element={<News/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/users/add" element={<AddUser/>}/>
        <Route exact path="/users/edit/:id" element={<EditUser/>}/>
        <Route exact path="/users/:id" element={<View_users/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
