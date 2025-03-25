import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');

    try {
      await emailjs.sendForm(
        'service_k9yf73s',
        'template_2ik6pdu',
        form.current,
        'iyj_6OUrJJt11rGIu' // Replace with your actual EmailJS public key
      );
      setStatus('success');
      form.current.reset();
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus('error');
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="from_name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary"
          required
        />
      </div>
      <div>
        <label htmlFor="from_email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="from_email"
          name="from_email"
          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary"
          required
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
      >
        <Send className="w-5 h-5" />
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </motion.button>
      {status === 'success' && (
        <p className="text-green-500 text-center">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
      )}
    </form>
  );
};

export default ContactForm;