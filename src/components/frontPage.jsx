import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { detailsAction } from '../store/chatDetails'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './frontPage.css'

const FrontPage = () => {
  const navigate = useNavigate()
  const name = useSelector((state) => state.user.ID)
  const search = useSelector((state) => state.user.username)
  const [giveID, setgive] = useState([])
  const[url,seturl]=useState([])

  const [ID, setID] = useState([])
  // let text =[]

  const dispatch = useDispatch()
  useEffect(() => {
    call()

  })

  //change

  const call= async()=> {
    if (search !==null) {
      // fetch(`http://localhost:3005/frontpage/${search}`)
      //   .then((res) => res.json())
      //   .then((data) => {
      //     setID(data[0])
        
      //   })

console.log(search)

       await fetch(`https://text-server.vercel.app/frontpage`,{
          method:"POST",
          headers:{
            'Content-type':'application/json'
          },
          body:JSON.stringify({search:search})
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setID(data[0])
        
        })

        // if (search) {
        //   fetch(`http://localhost:3005/convert/${search}`)
        //     .then((res) => res.json())
        //     .then((data) => {
             
        //       seturl(data[0])
              
        //     })
        //   }

    //     fetch("http://localhost:3005/image")
    //     .then((res)=>{
    //       console.log('search image');
    // seturl(res.url)
    
    //     })
    }

  

  }
 

  function firstcall(name) {
    alert(name.Friendname)

    dispatch(detailsAction.add({
      name:name.Friendname,
      mycode:name.mycode,
      Friendcode:name.Friendcode

    }))
    // change
    navigate('/chat')
  }

  




  const find = (e) => {
    e.preventDefault()
    if (giveID) {

   
   
  
     alert()
  //    fetch(`http://localhost:3005/search`, {
  //     method: "POST",
  //     headers: {
  //         'Content-type': 'application/json'
  //     },

  //     body: JSON.stringify({ user:search,ID:giveID})
  // })
  fetch(`https://text-server.vercel.app/search`, {
      method: "POST",
      headers: {
          'Content-type': 'application/json'
      },

      body: JSON.stringify({ user:search,ID:giveID})
  })


    }
  }

  // for(let i=0;i<ID.length;i++){
  //  text.push( 
  //  <div className='frontPage'>
  //         <p onClick={()=>{
  //           setID(ID[i])
  //         }}>
  //             {ID[i]}

  //         </p>

  //     </div>y
  //     )
  // }

  const text =ID.map((item,i)=>(
    
  <div  className='frontPage' key={i}>

     <img src={ID[i].profilename} alt=""  width='100' height='60' />
    <p key={i} onClick={()=>{
      firstcall(ID[i])
            // setgive(ID[i])
          }} width='70' height='70' >
      {ID[i].Friendname} 
    </p>
   
  </div>
  ))
  return (
    <div className='front-home'>
      <div className='content'>
        <h1 >Chat With Me</h1>
        {search == null ? ('') : (<h1>Welcome:{search}</h1>)}
        <form action="" onSubmit={find}>
          <label htmlFor="">search</label>
          <input type="text" onChange={(e) => {
            setgive(e.target.value)
          }} />
          <input type="submit" value='find' />
        </form>

        <div className='front-text'>
          {text}
        </div>
      
       
      </div>

    </div>
  )
}

export default FrontPage
