import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const GenreList = () => {
  const { genres, selectGenre } = useContext(MovieContext);

  return (
    <ul className='list-group'>
      {genres.map((genre) => (
        <li
          onClick={() => selectGenre(genre)}
          className='list-group-item'
          key={genre.id}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
