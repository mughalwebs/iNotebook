import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar.';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/Notes/NoteState';
import Alert from './Components/Alert';
import AlertVarsState from './Context/AlertVariables/AlertVarsState';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <>
      <AlertVarsState>
        <NoteState>
          <Router>
            <Navbar />
            <Alert />
            <div className="container">
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/signup' element={<Signup />} />
              </Routes>
            </div>
          </Router>
        </NoteState>
      </AlertVarsState>
    </>
  );
}

export default App;
