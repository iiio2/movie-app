import React, { Component, createContext } from 'react';

export const MovieContext = createContext();

class MovieContextProvider extends Component {
  state = {
    movies: [
      { id: 1, title: 'Skyfall', genre: 'Thriller' },
      { id: 2, title: 'Shutter Island', genre: 'Mystery' },
      { id: 3, title: 'The Titanic', genre: 'Romantic' },
      { id: 4, title: 'Superman', genre: 'Thriller' },
      { id: 5, title: 'Forensic', genre: 'Thriller' },
      { id: 6, title: 'Fight Club', genre: 'Action' },
      { id: 7, title: 'Spider-man', genre: 'Thriller' },
      { id: 8, title: 'The Matrix', genre: 'Sci-fi' },
      { id: 9, title: 'Snowden', genre: 'Thriller' },
    ],
    pageSize: 4,
    currentPage: 1,
    genres: [
      { id: 1, name: 'Romantic' },
      { id: 2, name: 'Thriller' },
      { id: 3, name: 'Action' },
      { id: 4, name: 'Sci-fi' },
    ],
    selectedGenre: '',
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m.id !== movie.id);

    if (
      this.state.currentPage > 1 &&
      movies.length % this.state.pageSize === 0
    ) {
      this.setState({ movies, currentPage: this.state.currentPage - 1 });
    }

    this.setState({ movies });
  };

  handlePageChange = (page) => {
    //const movies = [...this.state.movies];
    this.setState({ currentPage: page });
  };

  handleGenre = (genre) => {
    //const movies = [...this.state.movies];
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    return (
      <MovieContext.Provider
        value={{
          ...this.state,
          onDelete: this.handleDelete,
          onPageChange: this.handlePageChange,
          selectGenre: this.handleGenre,
        }}
      >
        {this.props.children}
      </MovieContext.Provider>
    );
  }
}

export default MovieContextProvider;
