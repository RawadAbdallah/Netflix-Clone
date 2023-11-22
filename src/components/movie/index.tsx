import './index.css'

type MovieProps = {
  movieURL: string
  movieImageSource: string
  movieTitle: string
  className?: string
}
/**
 * `Movie()` returns a clickable component with the movie's image and title.
 *
 * It takes variant, children, className as parameters.
 * @param movieURL ,string url that links to the movie's description page
 * @param movieImageSource ,string of the image source for the movie
 * @param movieTitle ,string for the movie's title
 * @param className ,are additional classes that can be assigned to the component
 *
 * @returns a customized <a> jsx tag that contains the movie's image and title.
 */
export default function Movie({
  movieURL,
  movieImageSource,
  movieTitle,
  className
}: MovieProps) {
  return (
    <a className={`movie-container ${className}`} href={movieURL}>
      <img src={movieImageSource} alt={movieTitle} />
      <span>movieTitle</span>
    </a>
  )
}
