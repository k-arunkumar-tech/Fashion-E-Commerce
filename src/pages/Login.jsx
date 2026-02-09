import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login functionality would go here (UI only)');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 bg-neutral-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full mx-4"
      >
        <div className="bg-white p-8 shadow-md">
          <h1 className="text-3xl font-display font-bold text-center mb-8">
            Welcome Back
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <Input
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-neutral-600 hover:text-black">
                Forgot password?
              </a>
            </div>

            <Button type="submit" variant="primary" className="w-full py-3">
              Login
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-neutral-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-black font-semibold hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
