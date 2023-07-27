import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [age, setAge] = useState(0);
  const[error,setError] =useState("");
  const Navigate = useNavigate();
  // console.log(name,email,age)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const addUser = {name,email,age};
    const responce = await fetch("http://localhost:4000",{
    method:"POST",
    body:JSON.stringify(addUser),
    headers:{
      "Content-Type":"application/json"
    },
    });
    const result = await responce.json();
    if(!responce.ok){
     console.log(result.error)
      setError(result.error);
    }
    if(responce.ok){
      console.log(result);
      setError("");
      setName("");
      setAge(0);
      setEmail("");
      Navigate("/all")
    }
  };
  return (
    
    <div className='container my-2'>
      {error && <div class="alert alert-danger"> {error} </div>}
      <h2 className='text-center'>Enter the data</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />

        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>

  )
}

export default Create
