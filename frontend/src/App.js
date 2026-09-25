import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing';

function App() {
  return (
    <>
      <Router>


        <Routes>

          {/* <Route path='/home' element></Route> */}

          <Route path='/' element={<LandingPage></LandingPage>}></Route>

        </Routes>

      </Router>
    </>
  );
}

export default App;
