import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../css/LoginPage.css';
import { Mail, Lock, AlertCircle } from 'lucide-react';
import { loginWithEmail, parseAuthError } from '../../firebase/authService';
import ReactGA from "react-ga4";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!email || !password) {
      setError('Proszę wypełnić wszystkie pola.');
      setLoading(false);
      return;
    }

    try {
      const user = await loginWithEmail({ email, password });
      localStorage.setItem('authToken', user.token);
      localStorage.setItem('userEmail', user.email || '');
      localStorage.setItem('username', user.username || '');
      ReactGA.event("login", {
        method: "Email"
      });
      navigate('/');
    } catch (err) {
      setError(parseAuthError(err));
      ReactGA.event("login_failed", {
        reason: parseAuthError(err)
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page app-shell">
        <div className="auth-container">
        <div className="auth-card login-card">
            <div className="auth-header">
            <h1>APEX TRACKER</h1>
            <p>Log in to your account</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
            {error && (
                <div className="error-message">
                <AlertCircle size={20} />
                <span>{error}</span>
                </div>
            )}

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                <Mail size={20} className="input-icon" />
                <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                />
                </div>
            </div>

            <button 
                type="submit" 
                className="submit-btn"
                disabled={loading}
            >
                {loading ? 'Logging in...' : 'Log in'}
            </button>
            </form>

            <div className="auth-footer">
            <p>Don't have an account?</p>
            <NavLink to="/registration" className="auth-link">
                Register
            </NavLink>
            </div>
        </div>
        </div>
    </div>
  );
}

export default LoginPage;
