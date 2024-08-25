import React, { useState } from 'react';
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const LoginForm = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async () => {
    setIsSubmitting(true);
    try {
      // Create a new FormData object
      const formData = new FormData();
      if(!identifier){
        setErrorMessage(' username/email required.')
        setTimeout(() => setErrorMessage(''), 3000);
        return;
      }
      if(!password){
        setErrorMessage(' password. is required')
        setTimeout(() => setErrorMessage(''), 3000);
        return;
      }
      console.log(identifier);
      console.log(password);
      formData.append("identifier", identifier);
      formData.append('password', password);
      // Replace with your actual API call
      await axios.post('http://localhost:8000/api/v1/admin/login', {
        identifier,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
     // Navigate("../admin");
     const navigate=useNavigate();
     navigate("/admin");
        redirect("/");
        redirect("/admin");
      // Handle successful login
    } catch (error) {
      setErrorMessage(`Invalid username/email or password. ${error}`);
      //setTimeout(() => setErrorMessage(''), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login</h2>

      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Username or Email</label>
        <input
          type="text"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isSubmitting}
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isSubmitting}
          required
        />
      </div>

      <button
        onClick={handleLogin}
        className={`w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-150 ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
};

export default LoginForm;
