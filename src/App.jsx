import React from 'react'
import { useState, useEffect } from "react"
import $ from "jquery"

function App() {
  const [username, setUsername] = useState("hi")

  useEffect(() => {
    $.ajax({
      url: "https://idk-flask-thin-i-guess.sustachio.repl.co/auth/getuser",
      success: (r) => {
        setUsername(r)
      }
    })
  }, [])
  
  return (
    <main>
      React⚛️ + Vite⚡ + Replit🌀
      {username}
    </main>
  );
}

export default App;