import './styles/global.css'

import { useEffect, useState } from 'react'
import Section from '@/components/section'

import Button from '@/components/ui/button'

import { fetchTMDB } from './utilities'

function App() {
  // const [movies, setMovies] = useState([])

  // useEffect(() => {
  //   const getData = async () => {
  //     const { data, error } = await fetchTMDB.getMoviesByGenre('Documentary')
  //     console.log(data)
  //     console.log(error)
  //   }
  //   getData()
  // }, [])

  return (
    <>
      {/* {movies?.map((movie) => {
        return movie?.original_title
      })} */}
    </>
  )
}

export default App
