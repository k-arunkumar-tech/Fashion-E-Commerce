import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoLocation, IoMail, IoCall } from 'react-icons/io5';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (UI only)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-neutral-900 text-white py-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-neutral-300">
              We'd love to hear from you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl font-display font-bold mb-6">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <Input
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <div>
                  <label className="block text-sm font-medium mb-2 text-neutral-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="input resize-none"
                    required
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl font-display font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-black text-white flex items-center justify-center">
                    <IoLocation size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-neutral-600">
                      123 Fashion Street<br />
                      New York, NY 10013<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-black text-white flex items-center justify-center">
                    <IoMail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-neutral-600">
                      info@fashion.com<br />
                      support@fashion.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-black text-white flex items-center justify-center">
                    <IoCall size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-neutral-600">
                      +1 (555) 123-4567<br />
                      Mon-Fri: 9AM - 6PM EST
                    </p>
                  </div>
                </div>
              </div>

              {/* Store Hours */}
              <div className="mt-12 p-6 bg-neutral-50">
                <h3 className="font-semibold mb-4">Store Hours</h3>
                <div className="space-y-2 text-sm text-neutral-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>12:00 PM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
