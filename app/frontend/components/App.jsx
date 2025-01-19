import React from 'react';

const App = ({query = null}) => {
  if (query != null) { 
    return (
      <div>
        <h1>Buscando</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Empieza a buscar</h1>
    </div>
  );
};

export default App;
