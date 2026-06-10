import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../css/RegistrationPage.css';
import { Mail, Lock, User, AlertCircle, CheckCircle } from 'lucide-react';
import { registerWithEmail, parseAuthError } from '../../firebase/authService';
import ReactGA from "react-ga4";

function RegistrationPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.username || !formData.email || !formData.confirmEmail || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields.');
      return false;
    }

    if (formData.username.length < 3) {
      setError('Username must be at least 3 characters long.');
      return false;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }

    if (formData.email !== formData.confirmEmail) {
      setError('Email addresses must be the same.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) {
      ReactGA.event("registration_failed", {
        reason: "Form Validation Error"
      });
      return;
    }

    setLoading(true);

    try {
      const user = await registerWithEmail({
        email: formData.email,
        password: formData.password,
        username: formData.username
      });

      localStorage.setItem('authToken', user.token);
      localStorage.setItem('userEmail', user.email || '');
      localStorage.setItem('username', user.username || '');
      ReactGA.event("sign_up", {
        method: "Email"
      });
      setSuccess('Account created successfully! Redirecting...');
      setTimeout(() => {
        navigate('/');
      }, 1200);
    } catch (err) {
      ReactGA.event("registration_failed", {
        reason: authError
      });
      setError(parseAuthError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="login-page registration-page app-shell">
        <div className="auth-container">
            <div className="auth-card registration-card">
            <div className="auth-header">
                <h1>APEX TRACKER</h1>
                <p>Create a new account</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
            {error && (
                <div className="error-message">
                <AlertCircle size={20} />
                <span>{error}</span>
                </div>
            )}

            {success && (
                <div className="success-message">
                <CheckCircle size={20} />
                <span>{success}</span>
                </div>
            )}

            <div className="form-group">
                <label htmlFor="username">Username</label>
                <div className="input-wrapper">
                <User size={20} className="input-icon" />
                <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Your username"
                    value={formData.username}
                    onChange={handleChange}
                    disabled={loading}
                />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                <Mail size={20} className="input-icon" />
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="confirmEmail">Confirm Email</label>
                <div className="input-wrapper">
                <Mail size={20} className="input-icon" />
                <input
                    id="confirmEmail"
                    type="email"
                    name="confirmEmail"
                    placeholder="Confirm your email"
                    value={formData.confirmEmail}
                    onChange={handleChange}
                    disabled={loading}
                />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                <Lock size={20} className="input-icon" />
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={loading}
                />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="input-wrapper">
                <Lock size={20} className="input-icon" />
                <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    disabled={loading}
                />
                </div>
            </div>

            <button 
                type="submit" 
                className="submit-btn"
                disabled={loading}
            >
                {loading ? 'Signing up...' : 'Register'}
            </button>
            </form>

            <div className="auth-footer">
            <p>Already have an account?</p>
            <NavLink to="/login" className="auth-link">
                Sign in
            </NavLink>
            </div>

        </div>
        </div>
    </div>
  );
}

export default RegistrationPage;
