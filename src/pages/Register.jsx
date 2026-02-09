import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert('Registration functionality would go here (UI only)');
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
            Create Account
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="First Name"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />

              <Input
                label="Last Name"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

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

            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <div className="text-sm text-neutral-600">
              <label className="flex items-start">
                <input type="checkbox" className="mr-2 mt-1" required />
                <span>
                  I agree to the{' '}
                  <Link to="/terms" className="text-black hover:underline">
                    Terms & Conditions
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-black hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>

            <Button type="submit" variant="primary" className="w-full py-3">
              Create Account
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-neutral-600">
            Already have an account?{' '}
            <Link to="/login" className="text-black font-semibold hover:underline">
              Login
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
