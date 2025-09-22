import React, {useState} from 'react';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';

export default function App(){
  const [token, setToken] = useState('');
  return (
    <div style={{padding:20}}>
      <h2>Freelance Job Platform (Demo)</h2>
      <div style={{display:'flex',gap:20}}>
        <div style={{flex:1}}><Signup /></div>
        <div style={{flex:1}}><Login setToken={setToken} /></div>
        <div style={{flex:1}}><Profile token={token} /></div>
      </div>
    </div>
  );
}
