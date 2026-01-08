import React, { useState } from 'react';
import { registerUser } from '../api/user.api';
import { useNavigate } from '@tanstack/react-router';

const RegisterForm = ({state}) => {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State for UI feedback
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate=useNavigate()

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Basic password validation
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true); // Show loading state
    setError('');     // Clear previous errors

    try {
      // Call API to register user
      await registerUser(name, password, email);
      navigate({to:"/dashboard"})
      setLoading(false); // Stop loading on success
    } catch (err) {
      // Handle API or network errors
      setLoading(false);
      setError(err.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Registration form */}
      <div
        
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Create an Account
        </h2>

        {/* Error message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        {/* Name input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3"
            id="name"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Email input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password input */}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>

        {/* Submit button */}
        <div className="flex items-center justify-between">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? 'Creating...' : 'Create Account'}
          </button>
        </div>

        {/* Redirect to login */}
        <div className="text-center mt-4">
          <p className="cursor-pointer text-sm text-gray-600">
            Already have an account?{' '}
            <span onClick={()=>state(true)} className="text-blue-500 hover:text-blue-700 cursor-pointer">
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;