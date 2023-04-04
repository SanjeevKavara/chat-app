import React from 'react'
import { useState,useEffect,useRef } from 'react'
import Message from './Message'
import { collection, orderBy, query,onSnapshot} from 'firebase/firestore'
import { db } from '../firebase'
import Sendmessage from './Sendmessage'


const style = {
main:`flex flex-col p-[10px] relative overflow-auto pb-[56px]`,
}

function Chat() {

  const [messages,setMessages] = useState([])

  const scroll = useRef()  // this is a hook that creates a reference to the span element 
  useEffect(()=>{
    const q = query(collection(db,'messages'),orderBy('timestamp')) ;// this is a query that gets the messages from the database and orders them by timestamp 
    const unsubscribe = onSnapshot(q,(querySnapshot)=>{ // this is a listener that listens to the changes in the database and updates the state of the messages in real time 
      
      let messages = [] // this is an array that stores the messages from the database 
      querySnapshot.forEach((doc)=>{ // this is a loop that iterates through the messages in the database
      messages.push({...doc.data(),id:doc.id}) // this is a function that pushes the messages to the messages array 
    })
    setMessages(messages) // this is a function that updates the state of the messages 

  })
  return ()=>unsubscribe(); // this is a cleanup function that unsubscribes the listener when the component unmounts 

},[]) // this is an empty array that tells the useEffect hook to run only once when the component mounts 

  return (
    <>
      <main className={style.main}>
      { messages && messages.map((message) => <Message key={message.id} message={message}/>)} 
       


      
    </main>
{/* send message component */}
<Sendmessage scroll={scroll}></Sendmessage>

<span ref = {scroll}></span> 
    </>
    
  )
}

export default Chat
