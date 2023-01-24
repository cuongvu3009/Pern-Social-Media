import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  Route,
  Outlet,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
// import LeftBar from './components/leftBar/LeftBar';
// import RightBar from './components/rightBar/RightBar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import './style.scss';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';

function App() {
  type ProtectedRouteProps = {
    children: React.ReactNode;
  };

  const { currentUser } = useContext(AuthContext);

  const { mode } = useContext(DarkModeContext);

  return (
    <div className={`theme-${mode === 'dark' ? 'dark' : 'light'}`}>
      <Router>
        <Routes>
          {/* login user only */}
          <Route
            path='/'
            element={
              !currentUser ? <Home /> : <Navigate to='/login' replace={true} />
            }
          />
          <Route
            path='/profile/:id'
            element={
              !currentUser ? (
                <Profile />
              ) : (
                <Navigate to='/login' replace={true} />
              )
            }
          />

          {/* only for user who not login */}
          <Route
            path='/login'
            element={
              !currentUser ? <Login /> : <Navigate to='/' replace={true} />
            }
          />
          <Route
            path='/register'
            element={
              !currentUser ? <Register /> : <Navigate to='/' replace={true} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
