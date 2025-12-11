import React from 'react';
import "./CTA-Button.css"
export default function CtaButton({label}) {
  return (
    <>
    <div>
        <button type="button" className="bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{label}</button>
    </div>
    </>
  );
}
