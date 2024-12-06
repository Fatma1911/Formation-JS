import React from 'react';

function Greeting({ name }) {
  return <h1>Bienvenue, {name}!</h1>;
}
function App() {
  return <div>
    <Greeting name="Alice" />
    <Greeting name="Bob" />
    <Greeting name="Bob" />

  </div>
    ;
}
export default App;