import { useParams } from 'react-router-dom'

import './index.css'

export default function Movie() {
  const param = useParams()
  const movieId = param.movieId

  return <div>movie id: {movieId}</div>
}
