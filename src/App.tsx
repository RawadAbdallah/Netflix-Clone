import Discover from '@/pages/discover'
import Home from '@/pages/home'
import Movie from '@/pages/movie'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/movie/:movieId" element={<Movie />} />
        <Route path="*" element={<>404 page not found</>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
