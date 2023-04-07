import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/login';
import Signup from './Pages/Signup/signup';
import LandingPage from './Pages/LandingPage/landingPage';
import PasswordReset from './Pages/PasswordReset/passwordReset';
import UserDashboard from './Pages/userDashboard/userDashboard';
// AUTH CONTEXT
import { useAuthContext } from './Hooks/useAuthContext';
import Navbar from './Components/Navbar/navbar';

function App() {
  const { user } = useAuthContext()
  return (
    <div className="App">
     <BrowserRouter>
     { user && <Navbar/> }
      <Routes>
        <Route path='/' element={ user ? <UserDashboard/> : <LandingPage/> }/>
        <Route path='/signup' element={user ? <UserDashboard/> : <Signup/>}/>
        <Route path='/login' element={user ? <UserDashboard/> : <Login/>}/>
        <Route path='/password_reset' element={user ? <UserDashboard/> : <PasswordReset/>}/>
        <Route path='/my' element={ user ? <UserDashboard/> : <Login/> }/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
