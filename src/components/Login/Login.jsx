import React, { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgot, setIsForgot] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = () => {
    console.log('Login', username, password);
  };

  const handleSignUp = () => {
    console.log('Sign Up', username, email, password, confirmPassword);
  };

  const handleForgot = () => {
    console.log('Forgot', email);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-green-900">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        {isLogin && !isForgot && (
          <div>
            <h2 className="text-lg font-bold mb-4">Login</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                className="bg-green-900 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleLogin}
              >
                Login
              </button>
              <p className="text-gray-700 text-sm mt-4">
                Don't have an account?{' '}
                <span
                  className="text-green-500 hover:text-yellow-400 cursor-pointer"
                  onClick={() => setIsLogin(false)}
                >
                  Sign Up
                </span>
              </p>
              <p className="text-gray-700 text-sm mt-2">
                Forgot password?{' '}
                <span
                  className="text-green-500 hover:text-yellow-400 cursor-pointer"
                  onClick={() => setIsForgot(true)}
                >
                  Forgot
                </span>
              </p>
            </form>
          </div>
        )}
        {!isLogin && !isForgot && (
          <div>
            <h2 className="text-lg font-bold mb-4">Sign Up</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
              <p className="text-gray-700 text-sm mt-4">
                Already have an account?{' '}
                <span
                  className="text-blue-500 hover:text-blue-700 cursor-pointer"
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </span>
              </p>
            </form>
          </div>
        )}
        {isForgot && (
          <div>
            <h2 className="text-lg font-bold mb-4">Forgot Password</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleForgot}
              >
                Send Reset Link
              </button>
              <p className="text-gray-700 text-sm mt-4">
                Go back to{' '}
                <span
                  className="text-blue-500 hover:text-blue-700 cursor-pointer"
                  onClick={() => setIsForgot(false)}
                >
                  Login
                </span>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;