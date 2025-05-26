import React, { useState } from 'react';
import LogoIntro from './Components/LogoIntro';
import Header from './Components/Header.jsx';
import Banner from './Components/Banner.jsx';
import Nosotros from './Components/Nosotros.jsx';
import Servicios from './Components/Servicios.jsx';
// ...otros imports...

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <LogoIntro onFinish={() => setShowIntro(false)} />}
      {!showIntro && (
        <div className="App">
          <Header />
          <Banner />
          <Nosotros />
          <Servicios />
          {/* Aquí puedes agregar Hero, secciones, etc */}
        </div>
      )}
    </>
  );
}

export default App;