import React, { useState } from "react";
import InputField from "@/components/CTA-Button/InputField/InputField";
import CtaButton from "@/components/CTA-Button/CTA-Button";
import "./inscription.css";

export default function Inscription() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulaire envoyé ");
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h2 className="signup-title">Créer mon compte</h2>

        <form onSubmit={handleSubmit} className="signup-form">

          <InputField
            placeholder="Nom d'utilisateur"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />

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

          <InputField
            type="password"
            placeholder="Confirmer mot de passe"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <CtaButton 
  label="Valider" 
  type="submit" 
/>
          
        </form>
      </div>
    </div>
  );
}
