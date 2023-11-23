import { Link } from 'react-router-dom'

import './index.css'

type MovieProps = {
  movieId: number
  movieImageSource: string
  movieTitle: string
  className?: string
}
/**
 * `Movie` returns a clickable component with the movie's image and title.
 *
 * It takes
 * @param movieId ,id of a movie
 * @param movieImageSource ,string of the image source for the movie
 * @param movieTitle ,string for the movie's title
 * @param className ,are additional classes that can be assigned to the component
 *
 * @returns component containing the movie's image and title.
 */
export default function Movie({
  movieId,
  movieImageSource,
  movieTitle,
  className
}: MovieProps) {
  return (
    <Link className={`movie-container ${className}`} to={`/movie/${movieId}`}>
      <img
        src={`${import.meta.env.VITE_IMAGE_BASE_URL}w500${movieImageSource}`}
        alt={movieTitle}
      />

      <span>{movieTitle}</span>
    </Link>
  )
}
