import React, { useState } from 'react';
import LogoIntro from './Components/LogoIntro';
import Header from './Components/Header.jsx';
// ...otros imports...

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <LogoIntro onFinish={() => setShowIntro(false)} />}
      {!showIntro && (
        <div className="App">
          <Header />
          {/* Aquí puedes agregar Hero, secciones, etc */}
        </div>
      )}
    </>
  );
}

export default App;