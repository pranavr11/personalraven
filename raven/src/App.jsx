import React from 'react'
import Home from './Components/Home'
import './App.css'
import {Route, Routes} from "react-router-dom"
import Events from './Components/Events'
import RavenTime from './Components/RavenTime'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'

function App(){
  return <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="events" element={<Events />}/>
    <Route path="raventime" element={<RavenTime />}/>
     <Route path="signin" element={<SignIn />}/> 
     <Route path="signup" element={<SignUp />}/> 
  </Routes>
}

export default App 
