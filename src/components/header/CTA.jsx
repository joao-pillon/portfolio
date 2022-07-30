import React from 'react';
import CV_JOAO_PILLON_DEV from '../../assets/CV-JOAO-PILLON-DEV.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV_JOAO_PILLON_DEV} download className="btn">Currículo</a>
      <a href="#contact" className="btn btn-primary">Contato</a>
    </div>
  )
}

export default CTA