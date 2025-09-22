import React, {useState} from 'react';
export default function Login({setToken}){
  const [form, setForm] = useState({email:'',password:''});
  const [msg,setMsg]=useState('');
  const submit = async (e)=>{e.preventDefault();
    const res = await fetch('http://localhost:5000/api/auth/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)});
    const data = await res.json();
    if(data.token){
      setToken(data.token);
      setMsg('Login successful');
    }else setMsg(JSON.stringify(data));
  }
  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={submit}>
        <input placeholder="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} /><br/>
        <input placeholder="password" type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} /><br/>
        <button>Login</button>
      </form>
      <pre>{msg}</pre>
    </div>
  );
}
