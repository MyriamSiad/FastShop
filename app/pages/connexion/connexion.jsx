import React, { useState } from 'react';
import { NavLink } from 'react-router';

const InputField = ({ type = "text", placeholder, name, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className="input-field"
    />
  );
};

const CtaButton = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="signup-button">
      {label}
    </button>
  );
};

export default function PageConnexion() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Connexion avec:', formData);
    // navigate('/listecourse');
    // Logique de connexion ici
  };

  return (
    <>
      <style>{`
        .signup-page {
          height: 100vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #7FD6A9;
          position: relative;
        }

        .signup-card {
          width: 350px;
          padding: 30px;
          background: white;
          border-radius: 20px;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
          text-align: center;
        }

        .signup-title {
          font-size: 22px;
          margin-bottom: 20px;
          font-weight: bold;
          color: #333;
        }

        .signup-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .input-field {
          padding: 12px 15px;
          border: 2px solid #e0e0e0;
          border-radius: 10px;
          font-size: 15px;
          outline: none;
          transition: 0.2s ease;
        }

        .input-field:focus {
          border-color: #7FD6A9;
          background: #f8fffe;
        }

        .input-field::placeholder {
          color: #999;
        }

        .signup-button {
          margin-top: 10px;
          padding: 12px;
          background-color: #f18a68;
          color: white;
          border: none;
          border-radius: 20px;
          font-size: 16px;
          cursor: pointer;
          transition: 0.2s ease;
          font-weight: 600;
        }

        .signup-button:hover {
          background-color: #e07350;
          transform: translateY(-1px);
          box-shadow: 0px 4px 8px rgba(241, 138, 104, 0.3);
        }

        .signup-button:active {
          transform: translateY(0);
        }

        .signup-footer {
          margin-top: 20px;
          font-size: 14px;
          color: #666;
        }

        .signup-footer a {
          color: #7FD6A9;
          text-decoration: none;
          font-weight: 600;
          cursor: pointer;
        }

        .signup-footer a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="signup-page">
        <div className="signup-card">
          <h2 className="signup-title">Connexion</h2>

          <div className="signup-form">
            <InputField
              type="email"
              placeholder="Adresse e-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <InputField
              type="password"
              placeholder="Mot de passe"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <NavLink to="/listeCourse">
            <CtaButton 
              label="Se connecter" 
              onClick={handleSubmit}
            />
         
            </NavLink>
             </div>
        <NavLink to="/inscription">
          <div className="signup-footer">
            Pas encore de compte ? <a>S'inscrire</a>
            
          </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}