import Movies from './components/Movies';
import MovieContextProvider from './context/MovieContext';

function App() {
  return (
    <MovieContextProvider>
      <div className='container'>
        <h3 className='text-center'>movie app</h3>
        <Movies />
      </div>
    </MovieContextProvider>
  );
}

export default App;
