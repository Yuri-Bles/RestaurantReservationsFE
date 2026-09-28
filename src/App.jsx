import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import TableOverview from './pages/TableOverview';
import './App.css'


function App() {

  return (
    <>
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/TableOverview">Table Overview</Link> |{" "}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TableOverview" element={<TableOverview />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App