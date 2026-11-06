import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import TableOverview from './pages/TableOverview';
import AddTableForm from './pages/AddTableForm';
import UpdateTableForm from './pages/UpdateTableForm';


function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TableOverview" element={<TableOverview />} />
        <Route path="/TableOverview/Add" element={<AddTableForm />} />
        <Route path="/TableOverview/Update/:tableNumber" element={<UpdateTableForm />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App