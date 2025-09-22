import React, {useState} from 'react';
export default function Signup(){
  const [form, setForm] = useState({name:'',email:'',password:'',role:'user'});
  const [msg,setMsg]=useState('');
  const submit = async (e)=>{e.preventDefault();
    const res = await fetch('http://localhost:5000/api/auth/signup',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)});
    const data = await res.json();
    setMsg(JSON.stringify(data));
  }
  return (
    <div>
      <h3>Signup</h3>
      <form onSubmit={submit}>
        <input placeholder="name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /><br/>
        <input placeholder="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} /><br/>
        <input placeholder="password" type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} /><br/>
        <select value={form.role} onChange={e=>setForm({...form,role:e.target.value})}>
          <option value="user">user</option>
          <option value="seller">seller</option>
          <option value="admin">admin</option>
        </select><br/>
        <button>Signup</button>
      </form>
      <pre style={{whiteSpace:'pre-wrap'}}>{msg}</pre>
    </div>
  );
}
