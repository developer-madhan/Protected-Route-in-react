import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'


const Home = () => {
  return (
    <div>Home</div>
  )
}



const User = () => {
  return (
    <div>User</div>
  )
}

const Admin = () => {
  return (
    <div>Admin</div>
  )
}
const NoPage = () => {
  return (
    <div>404 this page not here</div>
  )
}



const App = () => {
  return (
    <div className='App' >
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/user' element={<User />} ></Route>
        <Route path='/admin' element={<Admin />} ></Route>
        <Route path='*' element={<NoPage />} ></Route>
      </Routes>
    </div>
  )
}


export default App