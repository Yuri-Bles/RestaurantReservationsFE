import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TableOverview from './pages/TableOverview';
import AddTableForm from './pages/AddTableForm';
import UpdateTableForm from './pages/UpdateTableForm';
import ReservationScreen from './pages/ReservationScreen';


function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Reservation" element={<ReservationScreen />} />
        <Route path="/TableOverview" element={<TableOverview />} />
        <Route path="/TableOverview/Add" element={<AddTableForm />} />
        <Route path="/TableOverview/Update/:tableNumber" element={<UpdateTableForm />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App