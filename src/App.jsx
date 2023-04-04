
const styles = {
  appContainer:`max-w-[728px] mx-auto text-center`,
  sectionContainer:`flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,

}

import './App.css'
import Chat from './components/Chat'
import Navbar from './components/Navbar'

import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth' // this is a hook that listens to the auth state of the user and updates the state of the user in real time 


function App() {
 const [user] = useAuthState(auth) // this is a hook that listens to the auth state of the user and updates the state of the user in real time
 

  return (
    <div className={styles.appContainer}>
      <section className={styles.sectionContainer}>
        <Navbar></Navbar>
        {user?<Chat/>:null}
       
      </section>
     
    </div>
  )
}

export default App
