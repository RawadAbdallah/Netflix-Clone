import { useParams } from 'react-router-dom'

export default function discover() {
  const param = useParams()
  const movieId = param.movieId

  return <div>movie id: {movieId}</div>
}
