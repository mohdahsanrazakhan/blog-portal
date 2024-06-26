import './App.css';
import Auth from './pages/Auth/Auth';
import BlogPanel from './pages/Panel/BlogPanel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { AuthProvider } from './components/AuthContext/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/login' element={<Auth />} />
          <Route path='/blogpanel' element={
            <ProtectedRoute>
              <BlogPanel />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
