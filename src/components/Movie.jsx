import { Fragment, useContext } from 'react';
import Like from './common/Like';
import Pagination from './common/Pagination';
import { paginate } from '../utils/paginate';
import { MovieContext } from '../context/MovieContext';

const Movie = ({ movies, onDelete }) => {
  const { currentPage, pageSize, selectedGenre } = useContext(MovieContext);

  const allMovies = selectedGenre
    ? movies.filter((m) => m.genre === selectedGenre.name)
    : movies;

  const paginatedMovies = paginate(allMovies, currentPage, pageSize);

  return (
    <Fragment>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genres</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {paginatedMovies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>
                <Like />
              </td>
              <td>
                {' '}
                <button
                  onClick={() => onDelete(movie)}
                  className='btn btn-danger btn-sm '
                >
                  Delete
                </button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination />
    </Fragment>
  );
};

export default Movie;
