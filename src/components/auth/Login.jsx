import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import './Login.css';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

const Login = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  const validate = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = t('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = t('Email is invalid');
    }

    if (!password) {
      newErrors.password = t('Password is required');
    } else if (password.length < 6) {
      newErrors.password = t('Password must be at least 6 characters');
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      try {
        const response = await axios.post('https://backend-e-commerce-production.up.railway.app/api/v1/users/login', {
          email,
          password
        });
        setMessage(t('Login successful'));
        localStorage.setItem('token', response.data.token);
      } catch (error) {
        if (error.response) {
          setMessage(error.response.data.message || t('Login failed'));
        } else {
          setMessage(t('An error occurred'));
        }
      }
    }
  };

  return (
    <div>
      <Nav />
      <form className='form' onSubmit={handleSubmit}>
        <h2>{t('login')}</h2>
        <p>{t("enter")}</p>
        <div className='form-group'>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className='error'>{errors.email}</span>}
        </div>
        <div className='form-group' style={{display: 'flex', justifyContent: 'space-between', width: '420px'}}>
          <label htmlFor="password">{t('password')}</label>
          <p>{t('forgot')}</p>
        </div>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span className='error'>{errors.password}</span>}
        <button className='loginBtn' type="submit">{t('login')}</button>
        {message && <p className='message'>{message}</p>}
      </form>
      <Footer />
    </div>
  );
}

export default Login;
