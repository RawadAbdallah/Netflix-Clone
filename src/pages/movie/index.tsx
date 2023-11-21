import { useParams } from 'react-router-dom'

import './index.css'

import Header from '@/components/header'

export default function Movie() {
  const param = useParams()
  const movieId = param.movieId

  return (
    <div>
      <Header className="bg-black"></Header>
      <br />
      movie id: {movieId}
    </div>
  )
}
