import { Fragment, useContext } from 'react';
import { MovieContext } from '../../context/MovieContext';
import _ from 'lodash';

const Pagination = () => {
  const {
    movies,
    pageSize,
    onPageChange,
    currentPage,
    selectedGenre,
  } = useContext(MovieContext);

  console.log(currentPage);

  const pagesCount = Math.ceil(movies.length / pageSize);

  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <Fragment>
      {selectedGenre ? null : (
        <nav className='navigation'>
          <ul className='pagination'>
            {pages.map((page) => (
              <li
                className={
                  page === currentPage ? 'page-item active' : 'page-item'
                }
                key={page}
                onClick={() => onPageChange(page)}
              >
                <p className='page-link'>{page}</p>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </Fragment>
  );
};

export default Pagination;
