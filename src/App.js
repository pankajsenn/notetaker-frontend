import logo from './logo.svg';
import './App.css';
import Signin from './components/SignIn/Signin';
import SignUp from './components/SignUp/SignUp';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Addnote from './components/AddNote/Addnote';
import { useState } from 'react';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Signin/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/homepage' element={<Homepage/>}/>
    <Route path='/addnote' element={<Addnote/>}/>
    </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
