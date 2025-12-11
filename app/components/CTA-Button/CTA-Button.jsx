import React from 'react';
import "./CTA-Button.css"
export default function CtaButton({label}) {
  return (
    <>
    <div>
        <button type="button" className="text-white bg-warning box-border border border-transparent hover:bg-warning-strong focus:ring-4 focus:ring-warning-medium shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none">{label}</button>
    </div>
    </>
  );
}
