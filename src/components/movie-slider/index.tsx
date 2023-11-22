import { MovieProps, TypeGenres } from '@/types/movie'

import Movie from '../movie'

import './index.css'

import { useEffect, useState } from 'react'
import { fetchTMDB } from '@/utilities'

type SliderProps = {
  className?: string
  title: string
  genre: TypeGenres
}

/**
 * `Slider()` returns a slider for Movies Components.
 *
 * It takes children, className as parameters.
 * @param children ,are the Movie components passed to the slider
 * @param className ,are additional classes that can be assigned to the component
 * @param title, slider title
 *
 * @returns a responsive slider, built specifically for Movie component
 */

export default function Slider({ className, title, genre }: SliderProps) {
  // const TOTAL_SLIDE_ITEMS = children.length
  const [sliderIndex, setSliderIndex] = useState(0)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [movies, setMovies] = useState<MovieProps[] | null>(null)

  let displayIcon = true
  if (sliderIndex == 0) {
    displayIcon = false
  }

  async function getData() {
    const { data } = await fetchTMDB.getMoviesByGenre(genre)
    setMovies(data)
  }

  useEffect(() => {
    getData()

    const handleResize = () =>
      setWindowWidth(window.innerWidth - window.innerWidth * 0.03)
    window.addEventListener('resize', handleResize)
    return
  }, [])

  let slidesPerWindow, slideWidth
  if (windowWidth < 600) {
    slidesPerWindow = Math.floor(windowWidth / 174)
    slideWidth = 174
  } else {
    slidesPerWindow = Math.floor(windowWidth / 308)
    slideWidth = 310
  }

  const numberOfSlides = Math.ceil(movies?.length / slidesPerWindow)
  console.log(windowWidth)
  console.log(slidesPerWindow)
  console.log(slideWidth)

  function slideLeft() {
    if (sliderIndex == 0) {
      setSliderIndex(numberOfSlides - 1)
      return
    }
    setSliderIndex(sliderIndex - 1)
  }

  function slideRight() {
    if (sliderIndex == numberOfSlides - 1) {
      setSliderIndex(0)
      return
    }
    setSliderIndex(sliderIndex + 1)
  }

  return (
    <section className="slider-container">
      <h2>{title}</h2>
      <div className={`slider ${className}`}>
        {displayIcon && (
          <div className="handle previous" onClick={slideLeft}>
            <div className="handle-icon">
              <img src="/left.png" />
            </div>
          </div>
        )}
        <div
          style={{
            transform: `translate(calc(-${slideWidth}px*${slidesPerWindow} * ${sliderIndex}))`
          }}
          className="slides"
        >
          {movies?.map((movie, index) => (
            <Movie
              movieTitle={movie.title}
              movieImageSource={movie.backdrop_path}
              movieId={movie.id}
              key={index}
            />
          ))}
        </div>
        <div className="handle next" onClick={slideRight}>
          <div className="handle-icon">
            <img src="/right.png" />
          </div>
        </div>
      </div>
    </section>
  )
}
