import { auth } from '../firebase'
import React from 'react'
const style={
    button:`bg-gray-200 px-4 py-2 hover:bg-blue-100`
}

const Logout = () => {

const signout = ()=>{
    signout(auth) 
}

  return (
    <div onClick={()=>auth.signOut()} className={style.button}>
      Logout
    </div>
  )
}

export default Logout
