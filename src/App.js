import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Chat from './components/chat';

import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import FrontPage from './components/frontPage';
import LoginPage from './components/login/loginPage';
import CreateLoginPage from './components/login/create/create';
function App() {
 
  

  return (
    <div className="App">
      <Router>

        <Routes>


<Route path='/' element={ <LoginPage/>}/>
<Route path='/create' element={<CreateLoginPage/>} />
<Route path='/home' element={<FrontPage/>} />
<Route path='/chat' element={<Chat/>}/>
 
</Routes>
</Router>
{/* <Chat/> */}
{/* <LoginPage/>
<CreateLoginPage/> */}
{/* <FrontPage/> */}
    </div>

  );
}

export default App;
