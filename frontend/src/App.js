import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from './pages/landing';
import Authentication from './pages/authentication';
import { AuthProvider } from './contexts/AuthContext';
import VideoMeetComponent from './pages/VideoMeet';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/auth" element={<Authentication />} />

          <Route path='/:url' element={<VideoMeetComponent />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;