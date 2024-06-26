import React, { useState } from 'react'
import './Auth.css';
import authImg from '../../assets/auth-img.png'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../components/AuthContext/AuthContext';

function Auth() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();

    const checkUser = () => {
      if(email === 'blog@keplervoice.com' && password === 'kepler12345') {
        login();
        navigate('/blogpanel')
      } else {
        alert(`Invalid email and password.`)
      }
    }

  return (

    <div className='auth-page'>
      {/* Form Portion */}
      <div className='form-portion'>
        <h2>Log In to Kepler's Blog Portal</h2>
        <div className='input-fields'>
          <label htmlFor="email" className='input-label'>Email Address</label>
          <input type="email" name="email" id="email" className='input-area' value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter your email' />
        </div>
        <div className='input-fields'>
          <label htmlFor="password" className='input-label'>Password</label>
          <input type="password" name="password" id="password" className='input-area' value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter you password' />
        </div>
        <input type="submit" value="Log In" className='submit-btn' onClick={checkUser} />
        
      </div>
      {/* Image Portion */}
      <div className='img-portion'>
        <img src={authImg} alt="auth image" className='image' />
      </div>
    </div>
  )
}

export default Auth