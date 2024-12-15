'use client';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="py-20 container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full border rounded-lg px-3 py-2"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            className="w-full border rounded-lg px-3 py-2"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
