
import React, { useEffect } from 'react'
import './chat.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
const Chat = () => {
    const [change, setchange] = useState([])
    const [text, settext] = useState([])

    const [ID, setID] = useState([])
    const [FriendID, setFriendID] = useState([])
    const [Message, setMessage] = useState([])
    const [FriendMessage, setFriendMessage] = useState([])
    const [data, setdata] = useState([])
    const [user1,setuser1]=useState([])
    const [user2,setuser2]=useState([])
    
    const Friendname =useSelector((state)=> state.user.ID)
    const mycode=useSelector((state)=> state.user.mycode)
    const Friendcode=useSelector((state)=> state.user.Friendcode)
    const name=useSelector((state)=> state.user.username)
    // alert(name)
   
   let map=[]
    const fun = (e) => {
        e.preventDefault()
        text.push(change)
        setchange('')
    }

    const fun1 = (e) => {
        // e.preventDefault()
        if(Message){
        console.log('start')
        // fetch(`http://localhost:3005/`, {
        //     method: "POST",
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     // body: JSON.stringify({ ID: ID, FriendID: FriendID, Message: Message, FriendMessage: FriendMessage })
        //     body: JSON.stringify({ ID:name,FriendID:Friendname, Message: Message, FriendMessage:Message })
        // })

        fetch(`http://localhost:3005/chat/msg`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            // body: JSON.stringify({ ID: ID, FriendID: FriendID, Message: Message, FriendMessage: FriendMessage })
            body: JSON.stringify({ name:Friendname,ID:mycode, Message: Message, })
        })
        setMessage('')
    }

    }
    const friend = () => {
       
        const code1='641ea4d0cf4fb1fbd3fca28d'
        const code2='641ea4d0cf4fb1fbd3fca28c'
        fetch(`http://localhost:3005/chat/${mycode}&&${Friendcode}`)
        // fetch(`http://localhost:3005/chat/${code1}&&${code2}`)
            .then((res) => res.json())
            .then((data) => {
              
           if(data !==null){
                   setdata(data[0])
           }
               
                // console.log(data[0].MyMessage.length)
                // for(let i=0;i<data.length;i++){
                // setuser1(data[i])
                // }
                // setdata(data[0])
                
          
                
                
            })
    }
   
    
useEffect(()=>{
    
     friend()
if(data !==null){
    console.log('hhh');
    //   after ()
 console.log(data);
}
})

 function after (){
 
  

  for(let i=0, j=0;i<data.MyMessage.length ;i++,j++)
  {
    if(data.MyMessage[i] !==null && data.FriendMessage[j] !==null){
    map.push(
         <div key={i} className='map-div'>
       
       <li className='left'>{data.FriendMessage[i]}</li>
       {/* <li className='right'>{data.MyMessage.name[i]}</li> */}
        <li className='right'>{data.MyMessage[i]}</li>
      </div>)
    }
}





// for(let i=0;i<data.Message.FriendMessage.length;i++)
// {
//   map.push(
//        <div key={i} className='map-div'>
     
//       {/* {data.FriendMessage[data.MyMessage.length-1] ==' ' ? (<li></li>) :(<li className='left'>{data.FriendMessage[j]}</li>)}  */}
//       <li className='left'>{data.Message.FriendMessage.List[i]}</li>
//       {/* {data.MyMessage[i] ==' ' ? (<li></li>) :( <li className='right'>{data.MyMessage[i]}</li>)} */}
//       {/* <li className='right'>{data.MyMessage[i]}</li> */}
      

//     </div>)
// }
    
   }




//    let text1=data.map((item)=>
//    <div className='map-div'>
// <li className='right'>{item.MyMessage}</li>
//    </div>
//    )

//    let text2=user2.map((item)=>
//    <div className='map-div'>
// <li className='left'>{item}</li>
//    </div>
//    )

  
        return (
            <div className='chat'>

 {data.length == 0 ? (''):(after())}
 
                {/* <div className='chat-body'>
                    <form action="" className='form' onSubmit={fun1}>

                        <div className='form-div'>{map}</div>
                      

                        <input type="text" name="" id="" value={Message} onChange={(e) => {
                           setMessage(e.target.value)
                        }} />
    

                        <input type="submit" value='send' />
                    </form>

                    <button onClick={friend}>friend</button>
                </div> */}
                  <div className='chat-body'>
                  <div>user name: <font color='blue'>{Friendname}</font> </div>
                    <div action="" className='form' >


                    {/* <div className='form-div'>{map}</div> */}
                      
                        <div className='form-div'>

                          {map}

                   
                        </div>
                      

                        <input type="text" name="" id="" value={Message} onChange={(e) => {
                            let text=e.target.value
                           setMessage(text)
                        }}  onKeyPress={(e)=>{
                            // even.preventDefault()
                            e.key =="Enter" && fun1()
                        }}/>
    

                        <input type="submit" value='send' onClick={fun1} />
                     
                    </div>
       
                   
                </div>
            </div>
        )
    }

    export default Chat
