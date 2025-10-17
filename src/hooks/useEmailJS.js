// src/hooks/useEmailJS.js
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export const useEmailJS = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = async (formData) => {
    setLoading(true);
    setError(null);
    
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID', 
        formData,
        'YOUR_PUBLIC_KEY'
      );
      setSuccess(true);
    } catch (err) {
      setError('Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, loading, success, error };
};