import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import Movie from './Movie';
import GenreList from './GenreList';

const Movies = () => {
  const { movies, onDelete } = useContext(MovieContext);
  return (
    <div className='row'>
      <div className='col-sm-4'>
        <GenreList />
      </div>
      <div className='col-sm-8'>
        <Movie movies={movies} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default Movies;
