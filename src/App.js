import React, { useState } from 'react';

const App = () => {

  // Première valeur = valeur du state
  // Seconde valeur = fonction qui peut mettre à jour le state
  // Le useState determine la valeur initiale

  const [clicked, plusOne] = useState(0);

  return (
    <div className='App'>
      <p>Nombre de fois que tu as cliqué: {clicked}</p>
      <button onClick={() => {
        plusOne(clicked + 1)
      }}> Clique-moi</button>
    </div>
  );
};

export default App;