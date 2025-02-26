import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import GradientBorderButton from './GradientBorderButton';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_qsfu4lq', // Service ID
        'template_w2nop6r', // Template ID
        {
          form_name: form.name,
          to_name: 'Jawad',
          form_email: form.email,
          to_email: 'jawadabbas680@gmail.com',
          subject: form.subject,
          message: form.message,
        },
        'Zmtb0W880pIUQauz9' // User ID
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you for your message. We will get back to you soon.');

          setForm({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('An error occurred. Please try again.');
        }
      );
  };

  return (
    <StyledWrapper>
      <form ref={formRef} className="form" onSubmit={handleSubmit}>
        <h2 className="form-heading">Get In Touch</h2>
        <div className="form-field">
          <input
            required
            placeholder="Name"
            className="input-field"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <input
            required
            placeholder="Email"
            className="input-field"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <input
            required
            placeholder="Subject"
            className="input-field"
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <textarea
            required
            placeholder="Message"
            cols={30}
            rows={3}
            className="input-field"
            name="message"
            value={form.message}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <GradientBorderButton type="submit" className="w-full" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </GradientBorderButton>
        </div>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 2em;
    background-color: #1a1a1a;
    border-radius: 20px;
    position: relative;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }

  .form-heading {
    text-align: center;
    margin-bottom: 1em;
    font-size: 1.5em;
    color: white;
    font-weight: 600;
    background: linear-gradient(
      90deg,
      #866ee7,
      #ea60da,
      #ed8f57,
      #fbd41d,
      #2cca91
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .form-field {
    position: relative;
    background-color: #212121;
    border-radius: 10px;
    padding: 0.8em;
  }

  .input-field {
    width: 100%;
    background: none;
    border: none;
    outline: none;
    color: #fff;
    font-size: 1em;
  }

  .input-field::placeholder {
    color: #666;
  }

  @media (max-width: 768px) {
    .form {
      padding: 1.5em;
    }

    .form-heading {
      font-size: 1.2em;
    }
  }
`;

export default ContactForm;