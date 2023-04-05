import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../loginpage.css'

const CreateLoginPage = () => {
 
  const [ID,setID]=useState([])
  const [Password,setPassword]=useState([])
  const [image,setimage]=useState([])
  const navigate=useNavigate([])
 
  const login=(e)=>{
   e.preventDefault()
   
   console.log(ID,Password);
   if(ID.length !==0 || Password.length !==0){

 alert()

    const formData= new FormData()

    formData.append('image',image)

    fetch('http://localhost:3005/ready',{
      method:"POST",
      body:formData
    })
  
    fetch('http://localhost:3005/login',{
      method:"POST",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify({ID:ID,Password:Password})
    })
  
  
   
navigate('/')
  }
  else{
    alert('full the column')
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
      
 <div  className='submit create-submit'>
        <input type="submit" value='create' />
      </div>
      <div>
        <input type="file" name='image' onChange={(e)=>{
          setimage(e.target.files[0])
        }} />
      </div>
      </form>
     
    </div>
  )
}

export default CreateLoginPage
