import React from 'react'
import { useState } from 'react'
import {auth,db} from '../firebase'
import { addDoc, serverTimestamp,collection} from 'firebase/firestore';


const style = {
    form:`h-14 w-full max-w-[728px] flex text-xl absolute bottom-0 `,
    input:`w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
    button:`w-[20%] bg-green-500`
 }

function Sendmessage({scroll}) {
    const [input,setInput] = useState('');

    const sendMessage = async(e)=>{ // this is a function that sends the message to the database
        e.preventDefault();
        if(input===''){
            alert('please enter valid message')
            return
        }
        const {uid,displayName} = auth.currentUser // this is the user who is currently logged in 
        await addDoc(collection(db,'messages'),{  // this is a function that adds the message to the database 
            text: input,
            name:displayName, // this is the name of the user who is currently logged in 
            uid,
            timestamp:serverTimestamp()
        })
        setInput('')
        scroll.current.scrollIntoView({behavior:'smooth'})  // this is a function that scrolls the chat to the bottom 
    }

  return (
    <form onSubmit={sendMessage} className={style.form}>
        <input value={input}
            onChange={(e)=>setInput(e.target.value)} // this is a controlled input 
            className={style.input}
            type="text"
            placeholder='Message'
        />
        <button className={style.button} type='submit'>Send</button>

    </form>
  )
}

export default Sendmessage
