import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CreatePost from './pages/CreatePost';
import Institutions from './pages/Institutions';
import Affiliations from './pages/Affiliations';
import Settings from './pages/Settings';
import UploadStory from './pages/UploadStory';
import Notifications from './pages/Notifications';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/institutions" element={<Institutions />} />
            <Route path="/affiliations/:institutionId" element={<Affiliations />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/upload-story" element={<UploadStory />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
