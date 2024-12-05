import React, { useEffect, useState } from 'react';
import './CargaClapp.css';

const CargaClapp = () => {
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    fetch('/assets/mano.svg')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Le raste tilin');
        }
        return response.text();
      })
      .then((data) => setSvgContent(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="carga-clapp-container">
      <div
        className="svg-container"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </div>
  );
};

export default CargaClapp;
