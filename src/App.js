import React,{useState} from 'react'
import styles from './App.module.css'

export default function App() {

    const greeting = ["Hello", "Hii", "How do you do?","Konnichiwa","Konbanwa", "Good Evening", "Good morning", "Good afternoon"]

    const [msg,setMsg] = useState(0);
    function handleGreeting(){
        setMsg((msg+1)%greeting.length)
    }

  return (
    <div className={styles.greet}>
        <h1>{greeting[msg]}</h1>

        <button onClick={handleGreeting}>Next greeting</button>
    </div>
  )
}