import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/NavBar'
import { ListVideo } from './Components/ListVideos'
import { CreateVideo } from './Components/pages/CreateVideo'


import './app.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Home () {
  return (
    <h2>Home</h2>
  )
}

function Videos () {
  return (
    <>
      <h2>Videos</h2>
      <ListVideo/>
    </>
  )
}

function Users () {
  return (
    <h2>Users</h2>
  )
}



function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
      <h2>Hola Mundo {count}</h2>
      <NavBar/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/videos" element={<Videos/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/new" element={<CreateVideo/>}/>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
