import React from "react";

function Movie({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const movieILike = [
  {
    name: "Mad Max",
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/Video128/v4/6d/0c/83/6d0c83ff-8d14-4271-7a36-dd647ad66d21/pr_source.jpg/268x0w.jpg"
  },
  {
    name: "Wall-E",
    image: "https://t1.daumcdn.net/cfile/tistory/271BA84755A93CD107"
  },
  {
    name: "Moana",
    image:
      "https://straightfromamovie.com/wp-content/uploads/2016/12/Moana-Movie-2016-wide.jpg"
  }
];

function App() {
  return (
    <div>
      {movieILike.map(dvd => (
        <Movie name={dvd.name} picture={dvd.image} />
      ))}
    </div>
  );
}

export default App;
