import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar.';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/Notes/NoteState';
import Alert from './Components/Alert';

function App() {
  return (
    <>
        <NoteState>
          <Router>
            <Navbar />
            <Alert message={'Alert Message'} />
            <div className="container">
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
              </Routes>
            </div>
          </Router>
        </NoteState>
    </>
  );
}

export default App;
