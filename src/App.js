import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/Notes/NoteState';
import Alert from './Components/Alert';
import AlertVarsState from './Context/AlertVariables/AlertVarsState';
import Login from './Components/Login';
import Signup from './Components/Signup';
import LoginState from './Context/Authentication/LoginState';
import SignupState from './Context/Authentication/SignupState';
import IsLoginState from './Context/isLogin/isLoginState';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import UserDetails from './Components/UserDetails';
import GetDetailsState from './Context/GetUserDetails/GetDetailsState';
import 'react-tooltip/dist/react-tooltip.css'

function App() {
  return (
    <>
    <GetDetailsState>
      <IsLoginState>
        <AlertVarsState>
          <NoteState>
            <Router basename='/iNotebook'>
              <LoginState>
                <SignupState>
                  <Navbar />
                  <Alert />
                  <div className="container">
                    <Routes>
                      <Route exact path='/' element={<Home />} />
                      <Route exact path='/about' element={<About />} />
                      <Route exact path='/login' element={<Login />} />
                      <Route exact path='/signup' element={<Signup />} />
                      <Route exact path='/userDetails' element={<UserDetails />} />
                    </Routes>
                  </div>
                </SignupState>
              </LoginState>
            </Router>
          </NoteState>
        </AlertVarsState>
      </IsLoginState>
    </GetDetailsState>
    </>
  );
}

export default App;
