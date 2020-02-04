import React from "react";
import PropTypes from "prop-types";

function Movie({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Movie.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const movieILike = [
  {
    id: 1,
    name: "Mad Max",
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/Video128/v4/6d/0c/83/6d0c83ff-8d14-4271-7a36-dd647ad66d21/pr_source.jpg/268x0w.jpg",
    rating: 5.0
  },
  {
    id: 2,
    name: "Wall-E",
    image: "https://t1.daumcdn.net/cfile/tistory/271BA84755A93CD107",
    rating: 4.9
  },
  {
    id: 3,
    name: "Moana",
    image:
      "https://straightfromamovie.com/wp-content/uploads/2016/12/Moana-Movie-2016-wide.jpg",
    rating: 4.8
  }
];

function App() {
  return (
    <div>
      {movieILike.map(dvd => (
        <Movie
          key={dvd.id}
          name={dvd.name}
          picture={dvd.image}
          rating={dvd.rating}
        />
      ))}
    </div>
  );
}

export default App;
