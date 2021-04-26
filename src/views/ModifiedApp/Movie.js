import React from 'react';

const DEFAULT_PLACEHOLDER_IMAGE = '/logo192.png';

const Movie = ({ movie }) => {
  const poster = movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className='movie'>
      <h2 style={{ height: '2.5em', fontSize: '1.2em', width: '100%', display: 'block' }}>{movie.Title}</h2>
      <div>
        <img width='200' alt={`The movie titled: ${movie.Title}`} src={poster} />
      </div>
      <p>({movie.Year})</p>
    </div>
  );
};

export default Movie;
