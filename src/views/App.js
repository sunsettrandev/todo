import { ToastContainer } from 'react-toastify';
import {
  Route,
  Routes
} from "react-router-dom";

import logo from './logo.svg';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

import ListToDo from './ToDos/ListToDo';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import About from './about/About';
import ListUser from './ListUser/ListUser';
import DetailUser from './ListUser/DetailUser/DetailUser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todo' element={<ListToDo />} />
          <Route path='/listUser' element={<ListUser />} />
          <Route path='/listUser/:id' element={<DetailUser />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </header>


      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </div>

  );
}

export default App;
