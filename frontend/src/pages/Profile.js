import React, {useState} from 'react';
export default function Profile({token}){
  const [data,setData]=useState('');
  const load = async ()=>{
    const res = await fetch('http://localhost:5000/api/auth/profile',{headers:{Authorization:'Bearer '+token}});
    const d = await res.json();
    setData(JSON.stringify(d));
  }
  return (
    <div>
      <h3>Profile</h3>
      <button onClick={load}>Load Profile</button>
      <pre style={{whiteSpace:'pre-wrap'}}>{data}</pre>
    </div>
  );
}