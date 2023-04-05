import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './loginpage.css'
import { detailsAction } from '../../store/chatDetails'

const LoginPage = () => {
 
  const [ID,setID]=useState([])
  const [Password,setPassword]=useState([])
 const navigate=useNavigate()
const dispatch=useDispatch()
  const login=(e)=>{
   e.preventDefault()
   
   console.log(ID.length);
  if(ID.length !==0 || Password.length !==0){

  
  //   fetch('https://text-server.vercel.app/vercel-test')
  //   .then((res)=>{
  //     console.log(res);
  //     return res.json()
     
  //   })
  //  .then((data)=>{
  //    console.log(data)
  //  })

    //  fetch(`http://localhost:3005/loginPage/${ID}&&${Password}`)
    //  fetch(`https://text-server.vercel.app/loginPage/${ID}&&${Password}`,{
    //   headers:{}
    //  })
    fetch('https://text-server.vercel.app/loginPage',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
      ID:ID,Password:Password
      })
    })
    .then((res)=>res.json())
    .then((data)=>{
    console.log(data)
  //   if(data.message){
  //   alert(data.message.ID)
  //  dispatch(detailsAction.home(data.message.ID))
  //   navigate('/home')
  //   }
  //   else{
  //     alert('you dont have account')
  //     alert('create a account ')
  //   }
  })
//   const url = `https://text-server.vercel.app/loginPage/${ID}&&${Password}`;
//     var headers = {}
//   fetch(url, {
//     method : "GET",
//     mode: 'cors',
//     headers: headers
// }).then((res)=>res.json())
// .then((data)=>{
//   console.log(data)
// })

}
  }
  
  return (
    <div className='login-page' >
      <form action="" className='login-form' onSubmit={login}>
        <div>
        <label htmlFor="">ID</label>
        <input type="text" onChange={(e)=>{
          setID(e.target.value)
        }}/>

        </div> 
        <div>
       <label htmlFor="">Password</label>
        <input type="text" onChange={(e)=>{
              setPassword(e.target.value)
        }} />
       </div>
      
 <div  className='submit'>
        <input type="submit" value='login'  className='submit'/>
        </div>
        <p onClick={()=>{
     navigate('/create')
        }}>create page</p>
      </form>
    </div>
  )
}

export default LoginPage
