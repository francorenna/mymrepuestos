import React, { useEffect, useState } from 'react';
import '../Styles/LogoIntro.css';

function LogoIntro({ onFinish }) {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShrink(true), 2000);
    const timer2 = setTimeout(() => onFinish(), 3000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div className={`logo-intro ${shrink ? 'shrink' : ''}`}>
      <img src={process.env.PUBLIC_URL + '/logointro.svg'} alt="Logo MyM" />
    </div>
  );
}

export default LogoIntro;