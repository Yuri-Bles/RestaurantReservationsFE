import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'


function App() {

  return (
    <>
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  )

  function Home() 
  {
    return <h1>Home Page</h1>;
  }
}

export default App