import React, { useEffect, useState } from 'react';
import '../Styles/LogoIntro.css';

function LogoIntro({ onFinish }) {
  const [shrink, setShrink] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShrink(true), 1200); // shrink antes
    const timer2 = setTimeout(() => setFadeOut(true), 2200); // fade out después del shrink
    const timer3 = setTimeout(() => onFinish(), 2700); // desmonta después del fade out
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onFinish]);

  return (
    <div className={`logo-intro${shrink ? ' shrink' : ''}${fadeOut ? ' fade-out' : ''}`}>
      <img src={process.env.PUBLIC_URL + '/logointro.svg'} alt="Logo MyM" className="logo-fadein" />
    </div>
  );
}

export default LogoIntro;