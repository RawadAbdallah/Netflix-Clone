import './components/movie'

import Movie from './components/movie'
import Slider from './components/movie-slider'

function App() {
  const placeholderImageURL =
    'https://designshack.net/wp-content/uploads/placeholder-image.png'

  const movieData = [
    {
      movieURL: 'https://www.imdb.com/title/tt0376756/',
      movieImageSource: placeholderImageURL,
      movieTitle: 'Shawshank Redemption'
    },
    {
      movieURL: 'https://www.imdb.com/title/tt0068646/',
      movieImageSource: placeholderImageURL,
      movieTitle: 'The Godfather'
    },
    {
      movieURL: 'https://www.imdb.com/title/tt0111161/',
      movieImageSource: placeholderImageURL,
      movieTitle: 'The Dark Knight'
    },
    {
      movieURL: 'https://www.imdb.com/title/tt0081144/',
      movieImageSource: placeholderImageURL,
      movieTitle: 'Pulp Fiction'
    },
    {
      movieURL: 'https://www.imdb.com/title/tt0167262/',
      movieImageSource: placeholderImageURL,
      movieTitle: 'The Lord of the Rings'
    },
    {
      movieURL: 'https://www.imdb.com/title/tt1201607/',
      movieImageSource: placeholderImageURL,
      movieTitle: '12 Angry Men'
    },
    {
      movieURL: 'https://www.imdb.com/title/tt0468569/',
      movieImageSource: placeholderImageURL,
      movieTitle: 'The Good '
    },
    {
      movieURL: 'https://www.imdb.com/title/tt0068646/',
      movieImageSource: placeholderImageURL,
      movieTitle: 'The Godfather'
    },
    {
      movieURL: 'https://www.imdb.com/title/tt0111161/',
      movieImageSource: placeholderImageURL,
      movieTitle: 'The Dark Knight'
    },
    {
      movieURL: 'https://www.imdb.com/title/tt0081144/',
      movieImageSource: placeholderImageURL,
      movieTitle: 'Pulp Fiction'
    },
    {
      movieURL: 'https://www.imdb.com/title/tt0167262/',
      movieImageSource: placeholderImageURL,
      movieTitle: 'The Lord of the Rings'
    },
    {
      movieURL: 'https://www.imdb.com/title/tt1201607/',
      movieImageSource: placeholderImageURL,
      movieTitle: 'last slideeeee'
    }
  ]
  return (
    <div className="App">
      <Slider title="Hello World">{movieData}</Slider>
    </div>
  )
}

export default App
