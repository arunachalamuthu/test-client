import React, { useEffect } from 'react'
import './chat.css'
import { useState } from 'react'
import { format } from 'date-fns'
import { useSelector } from 'react-redux'

const Chat = () => {  

    const [Message, setMessage] = useState([])
    const [data, setdata] = useState([])

    const Friendname = useSelector((state) => state.user.ID)
    const mycode = useSelector((state) => state.user.mycode)
    const Friendcode = useSelector((state) => state.user.Friendcode)
    const name = useSelector((state) => state.user.username)
    let map = []

    const fun1 = (e) => {

        if (Message) {
            console.log('start')


            fetch(`https://text-server.vercel.app/chat/msg`, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },

                body: JSON.stringify({ name: Friendname, ID: mycode, Message: Message, })
            })
            setMessage('')
        }

    }
    const friend = () => {

        // fetch(`https://text-server.vercel.app/chat/${mycode}&&${Friendcode}`)
        
        //     .then((res) => res.json())
        //     .then((data) => {

        //         if (data !== null) {
        //             setdata(data[0])
        //         }
        //     })
        fetch(`https://text-server.vercel.app/chat/`,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({mycode:mycode,Friendcode:Friendcode})
        })
        
        .then((res) => res.json())
        .then((data) => {

            if (data !== null) {
                setdata(data[0])
            }
        })
    }

    useEffect(() => {

        friend()

    })

    function after() {

        for (let i = 0, j = 0; i < data.MyMessage.length; i++, j++) {
            if (data.MyMessage[i] !== null && data.FriendMessage[j] !== null) {
                if (data.MyMessage[i].name == Friendname) {

                    const timeline = [{
                        createdate: new Date(String(data.MyMessage[i].date))
                    }]

                    map.push(
                        <div key={i} className='map-div'>


                            <li className='right'>{data.MyMessage[i].Message}</li>

                            <p className='right'>{format(timeline[0].createdate, "h:m:a")}</p>
                        </div>)
                }
                else if (data.MyMessage[i].name !== Friendname) {
                    const timeline = [{
                        createdate: new Date(String(data.MyMessage[i].date))
                    }]
                    map.push(
                        <div key={i} className='map-div'>


                            <li className='left'>{data.MyMessage[i].Message}</li>
                            <p className='left'>{format(timeline[0].createdate, "h:m:a")}</p>

                        </div>)
                }

            }
        }


    }

    return (
        <div className='chat'>
            {data.length == 0 ? ('') : (after())}

            <div className='chat-body'>
                <div>Friend name: <font color='blue'>{Friendname}</font> </div>
                <div action="" className='form' >
                    <div className='form-div'>
                        {map}
                    </div>
                    <input type="text" name="" id="" value={Message} onChange={(e) => {
                        let text = e.target.value
                        setMessage(text)
                    }} onKeyPress={(e) => {

                        e.key == "Enter" && fun1()
                    }} />
                    <input type="submit" value='send' onClick={fun1} />
                </div>


            </div>
        </div>
    )
}

export default Chat
