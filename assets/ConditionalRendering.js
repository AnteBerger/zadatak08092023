import React from 'react';

function ConditionalRendering(props) {
  const { number } = props; 

  return (
    <div>
      <h2>Conditional Rendering</h2>
      {number === undefined ? (
        <p>Nedefiniran broj. Ništa se ne ispisuje.</p>
      ) : number > 5 ? (
        <p>Broj je veći od 5.</p>
      ) : (
        <p>Broj je manji ili jednak 5.</p>
      )}
    </div>
  );
}

export default ConditionalRendering;
