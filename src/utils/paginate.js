import _ from 'lodash';

export function paginate(movies, currentPage, pageSize) {
  let startIndex = (currentPage - 1) * pageSize;
  const paginatedMovies = _(movies).slice(startIndex).take(pageSize).value();

  if (currentPage > 1 && paginatedMovies.length === 0) {
    startIndex -= startIndex;
    return _(movies).slice(startIndex).take(pageSize).value();
  }
  return paginatedMovies;
}
