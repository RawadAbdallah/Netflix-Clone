import './components/movie'

import Movie from './components/movie'
import Slider from './components/movie-slider'

function App() {
  const placeholderImageURL =
    'https://designshack.net/wp-content/uploads/placeholder-image.png'

  const movieData = [
    {
      movieId: 'https://www.imdb.com/title/tt0376756/',
      img: placeholderImageURL,
      title: 'Shawshank Redemption'
    },
    {
      movieId: 'https://www.imdb.com/title/tt0068646/',
      img: placeholderImageURL,
      title: 'The Godfatr'
    },
    {
      movieId: 'https://www.imdb.com/title/tt0111161/',
      img: placeholderImageURL,
      title: 'The Dark Knight'
    },
    {
      movieId: 'https://www.imdb.com/title/tt0081144/',
      img: placeholderImageURL,
      title: 'Pulp Fiction'
    },
    {
      movieId: 'https://www.imdb.com/title/tt0167262/',
      img: placeholderImageURL,
      title: 'The Lord of the Rings'
    },
    {
      movieId: 'https://www.imdb.com/title/tt1201607/',
      img: placeholderImageURL,
      title: '12 Angry Men'
    },
    {
      movieId: 'https://www.imdb.com/title/tt0468569/',
      img: placeholderImageURL,
      title: 'The Good '
    },
    {
      movieId: 'https://www.imdb.com/title/tt0068646/',
      img: placeholderImageURL,
      title: 'The Godfather'
    },
    {
      movieId: 'https://www.imdb.com/title/tt0111161/',
      img: placeholderImageURL,
      title: 'The Dark '
    },
    {
      movieId: 'https://www.imdb.com/title/tt0081144/',
      img: placeholderImageURL,
      title: 'Pulp Fict'
    },
    {
      movieId: 'https://www.imdb.com/title/tt0167262/',
      img: placeholderImageURL,
      title: 'The Lord of the'
    },
    {
      movieId: 'https://www.imdb.com/title/tt1201607/',
      img: placeholderImageURL,
      title: 'last slideeeee'
    }
  ]
  return (
    <div className="App">
      <Slider title="Hello World" movieList={movieData} key={1} />
    </div>
  )
}

export default App
