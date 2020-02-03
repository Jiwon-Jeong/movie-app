import React from "react";

function Movie({ fav }) {
  return <h2>I like {fav}</h2>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Movie fav="Mad Max" />
      <Movie fav="Moana" />
      <Movie fav="Wall-e" />
      <Movie fav="Spider-man" />
    </div>
  );
}

export default App;
