import Movie from '../movie'

import './index.css'

import { useEffect, useState } from 'react'

type MovieListType = {
  title: string
  img: string
  movieId: string
}

type SliderProps = {
  className?: string
  title: string
  movieList: MovieListType[]
}

/**
 * `Slider` returns a slider for Movies Components.
 *
 * It takes children, className as parameters.
 * @param children ,are the Movie components passed to the slider
 * @param className ,are additional classes that can be assigned to the component
 * @param title, slider title
 *
 * @returns a responsive slider, built specifically for Movie component
 */
export default function Slider({ className, title, movieList }: SliderProps) {
  const [windowWidth, setWindowWidth] = useState(window?.innerWidth)
  const [transformBy, setTransformBy] = useState(0)
  const [slider, setSlider] = useState({
    index: 1,
    slidesPerWindow: 4,
    width: 1,
    numberOfSlides: 1
  })

  const [displayIcon, setDisplayIcon] = useState({
    left: slider.index === 0,
    right: true
  })

  useEffect(() => {
    function handleResize() {
      const newWindowWidth = window.innerWidth

      setWindowWidth(newWindowWidth)

      if (windowWidth < 600) {
        setSlider((prev) => {
          return {
            ...prev,
            width: 174,
            slidesPerWindow: Math.floor(windowWidth / 174)
          }
        })
      } else {
        setSlider((prev) => {
          return {
            ...prev,
            width: 310,
            slidesPerWindow: Math.floor(windowWidth / 308)
          }
        })
      }

      setSlider((prev) => {
        return {
          ...prev,
          numberOfSlides: Math.ceil(movieList.length / slider.slidesPerWindow)
        }
      })

      setTransformBy(slider.width * slider.slidesPerWindow * slider.index)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return window.removeEventListener('resize', handleResize)
  }, [slider.index])

  function slideLeft() {
    setSlider({
      ...slider,
      index: slider.index === 0 ? 0 : slider.index - 1
    })

    setTransformBy(slider.width * slider.slidesPerWindow * slider.index)
  }

  function slideRight() {
    setSlider({
      ...slider,
      index: slider.index === slider.numberOfSlides - 1 ? slider.index : slider.index + 1
    })

    setTransformBy(slider.width * slider.slidesPerWindow * slider.index)
  }

  return (
    <section className="slider-container">
      <h2>{title}</h2>

      <div className={`slider ${className}`}>
        {displayIcon.right && (
          <div className="handle previous" onClick={slideLeft}>
            <div className="handle-icon">
              <img src="src\assets\images\slider\left.png" />
            </div>
          </div>
        )}

        <div
          style={{
            transform: `translate(-${transformBy}px)`
          }}
          className="slides"
        >
          {movieList.map((movie) => {
            return (
              <Movie
                key={`${movie.movieId}-${movie.title}`}
                movieURL={movie.movieId}
                movieImageSource={movie.img}
                movieTitle={movie.title}
              />
            )
          })}
        </div>

        <div className="handle next" onClick={slideRight}>
          <div className="handle-icon">
            <img src="src\assets\images\slider\right.png" />
          </div>
        </div>
      </div>
    </section>
  )
}
