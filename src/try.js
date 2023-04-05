import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Chat from './components/chat';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import FrontPage from './components/frontPage';
import LoginPage from './components/login/loginPage';
import CreateLoginPage from './components/login/create/create';
function App() {
  const [ID, setID] = useState([])
  const [FriendID,setFriendID]=useState([])
  const [Message, setMessage] = useState([])
  const [FriendMessage,setFriendMessage]=useState([])
  const [data, setdata] = useState([])
  // const fun = (e) => {
  //   e.preventDefault()
  //   console.log('start')
  //   fetch(`http://localhost:3005/`, {
  //     method: "POST",
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify({ ID:ID , FriendID:FriendID, Message: Message,FriendMessage:FriendMessage })
  //   })
  // }
// const friend=()=>{
//     fetch('http://localhost:3005/')
//       .then((res) => res.json())
//       .then((data) => {
      // for(let i=0;i<data.length;i++){
      //   const data1 = data[i]
      //   console.log(data1.ID)

      //   setdata(data1.ID)
      // }
  //  setdata(data)
  //  console.log(data.length)
    
      //   for(let i=0;i<data1.length;i++){
      //   setdata(data1[i].ID)
      // }

      // })
      // fetch(`http://localhost:3005/${ID}`)
      // .then((res) => res.json())
      // .then((data) => {
       
      // })

  // }

 
    // const given=data.map((item,i) => 
 
    //   <div key={i}>
    //   <h1 onClick={()=>{
    //       setFriendID(item)
    //     }}>{item}</h1>
    //   </div>
    // )
  

  return (
    <div className="App">
      <Router>

        <Routes>
{/*    
   <button onClick={friend}>Friends</button>
   <div >{given}</div>
      <form onSubmit={fun} >
        <input type="text" onChange={(e) => {
          setID(e.target.value)
        }} />
        <label htmlFor="">FriendID</label>
        <input type="text" onChange={(e)=>{
          setFriendID(e.target.value)
        }} />
        <label htmlFor="">FriendMessage</label>
        <input type="text"  onChange={(e)=>{
          setFriendMessage(e.target.value)
        }}/>
        <input type="text" onChange={(e) => {
          setMessage(e.target.value)
        }} />
        <input type="submit" value='submit' />
      </form>
      <div className='h1'>

     
       
      </div> */}

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
