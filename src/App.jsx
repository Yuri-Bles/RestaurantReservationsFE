import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from './pages/Home';
import TableOverview from './pages/TableOverview';
import AddTableForm from './pages/AddTableForm';
import UpdateTableForm from './pages/UpdateTableForm';
import ReservationScreen from './pages/ReservationScreen';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';


function App() {

  return (
    <>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />

          {/* Private routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<>
                <Navbar />
                <Outlet />
            </>}>
              <Route path="/" element={<Home />} />
              <Route path="/Reservation" element={<ReservationScreen />} />
              <Route path="/TableOverview" element={<TableOverview />} />
              <Route path="/TableOverview/Add" element={<AddTableForm />} />
              <Route path="/TableOverview/Update/:tableNumber" element={<UpdateTableForm />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    </>
  )
}

export default App