import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import TableOverview from './pages/TableOverview';


function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TableOverview" element={<TableOverview />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App