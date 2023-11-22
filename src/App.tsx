import Discover from '@/pages/discover'
import Home from '@/pages/home'
import Movie from '@/pages/movie'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Slider>
        {movieData.map((movie, index) => (
          <Movie
            movieTitle={movie.movieTitle}
            movieImageSource={movie.movieImageSource}
            movieURL={movie.movieURL}
            key={index}
          />
        ))}
      </Slider>
    </div>
  )
}

export default App
