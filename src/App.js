import React, { useEffect, useState } from 'react'
import {Routes,Route } from "react-router-dom";

import Start from './Pages/Start';
import SignUp from './Pages/Signup';
import Login from './Pages/Login';
import AddLand from './Pages/AddLand';
import LandingPage from './Pages/LandingPage';
import ViewPost from './Pages/ViewPost';
import LIDashboard from './Pages/LIDashboard';
import Navigation from './Components/Navbar/Navbar';
function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    let user = window.localStorage.getItem("user");
    if(user){
      setUser(user)
    }
  },[])
  return (
    <div>
      <Navigation user={user}/>
      <Routes>
        <Route path='/' element={<Start/>} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/addland' element={<AddLand user={user}/>}/>
        <Route path='/landing' element={<LandingPage/>}/>
        <Route path='/viewpost' element={<ViewPost/>}/>
        <Route path='/lidashboard' element={<LIDashboard/>}/>
      </Routes>
      
   </div>
  )
}

export default App;