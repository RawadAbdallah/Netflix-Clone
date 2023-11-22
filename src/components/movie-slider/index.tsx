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
 * `Slider` returns a slider for Movies Components.
 *
 * It takes 
 * @param className ,are additional classes that can be assigned to the component
 * @param genre ,is the movire genre
 * @param title, slider title
 *
 * @returns a responsive slider, built specifically for Movie component
 */

export default function Slider({ className, title, genre }: SliderProps) {
  const [movies, setMovies] = useState<MovieProps[] | null>([])
  const [slider, setSlider] = useState({
    sliderIndex: 0,
    windowWidth: window.innerWidth,
    width: 0,
    slidesPerWindow: 0,
    slideWidth: 0,
    displayIconLeft: false
  })

  const numberOfSlides = Math.ceil(
    movies?.length === null ? 1 : movies?.length / slider.slidesPerWindow
  )

  useEffect(() => {
    async function getData() {
      const { data } = await fetchTMDB.getMoviesByGenre(genre)
      setMovies(data)
    }
    getData()
  }, [])

  useEffect(() => {
    if (slider.sliderIndex == 0) {
      setSlider((prev) => {
        return { ...prev, displayIconLeft: false }
      })
    } else {
      setSlider((prev) => {
        return { ...prev, displayIconLeft: true }
      })
    }

    const handleResize = () =>
      setSlider((prev) => {
        return { ...prev, windowWidth: window.innerWidth - window.innerWidth * 0.03 }
      })

    window.addEventListener('resize', handleResize)

    if (slider.windowWidth < 600) {
      setSlider((prev) => {
        return { ...prev, slidesPerWindow: Math.floor(slider.windowWidth / 174) }
      })
      setSlider((prev) => {
        return { ...prev, slideWidth: 174 }
      })
    } else {
      setSlider((prev) => {
        return { ...prev, slidesPerWindow: Math.floor(slider.windowWidth / 308) }
      })
      setSlider((prev) => {
        return { ...prev, slideWidth: 310 }
      })
    }
    return
  }, [slider.sliderIndex, slider.windowWidth])

  function slideLeft() {
    if (slider.sliderIndex == 0) {
      setSlider((prev) => {
        return { ...prev, sliderIndex: numberOfSlides - 1 }
      })
      return
    }
    setSlider((prev) => {
      return { ...prev, sliderIndex: prev.sliderIndex - 1 }
    })
  }

  function slideRight() {
    if (slider.sliderIndex == numberOfSlides - 1) {
      setSlider((prev) => {
        return { ...prev, sliderIndex: 0 }
      })
      return
    }

    setSlider((prev) => {
      return { ...prev, sliderIndex: prev.sliderIndex + 1 }
    })
  }

  return (
    <section className={`slider-container ${className}`}>
      <h2>{title}</h2>
      <div className="slider-wrapper">
        {slider.displayIconLeft && (
          <div className="handle previous" onClick={slideLeft}>
            <div className="handle-icon">
              <img src="/left.png" alt="arrow left" />
            </div>
          </div>
        )}
        <div className="slider">
          <div
            style={{
              transform: `translate(calc(-${slider.slideWidth}px*${slider.slidesPerWindow} * ${slider.sliderIndex}))`
            }}
            className="slides"
          >
            {movies?.map((movie, index) => {
              return (
                <Movie
                  movieTitle={movie.title}
                  movieImageSource={movie.backdrop_path}
                  movieId={movie.id}
                  key={index}
                />
              )
            })}
          </div>
        </div>
        <div className="handle next" onClick={slideRight}>
          <div className="handle-icon">
            <img src="/right.png" alt="arrow right" />
          </div>
        </div>
      </div>
    </section>
  )
}
