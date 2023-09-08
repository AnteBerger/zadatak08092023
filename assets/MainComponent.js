import React from 'react';
import ConditionalRendering from './ConditionalRendering';

function MainComponent() {
  const number = 10; 

  return (
    <div>
      <h1>Main Component</h1>
      <ConditionalRendering number={number} />
    </div>
  );
}

export default MainComponent;
