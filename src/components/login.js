import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await axios.post('http://localhost:8080/api/login', { username, password });
    //   // Handle successful login
    //   console.log(response.data.message);
    //   navigate('/dashboard'); // Redirect to dashboard after successful login
    // } catch (error) {
    //   // Handle login error
    //   alert(error.response.data.message );
    // }

    // Handle login logic here
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
      navigate('/dashboard'); 
    } else {
      alert('Invalid credentials. Please try again.');
    }
    //Redirect to dashboard after successful login
  };

  return (
    <div className="container mt-5 p-4 border rounded shadow position-absolute top-50 start-50 translate-middle" style={{ maxWidth: '400px',height:'350px' }}>
        <div>
            <h2 style={{ color: 'blue', marginBottom: '20px' }}>WhildHome</h2>
        </div>
    <div>

      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{marginTop:"20px"}}>
        <div class="mb-3">
        
         <input
            type="text"
            name="username"
            placeholder="Username"
            class="form-control  mb-3"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
            </div>
        <div>
          
          <input
            type="password"
            name="password"
            placeholder="Password"
            class="form-control mb-3"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div> <button class="btn btn-primary">Login</button></div>
       
      </form>
    </div>
    </div> 
  );
}

export default Login;