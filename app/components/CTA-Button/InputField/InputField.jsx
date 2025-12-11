import React from "react";
import "./InputField.css"

export default function InputField({ label, type = "text", value, onChange, placeholder, name }) {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
        className="input-field"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
