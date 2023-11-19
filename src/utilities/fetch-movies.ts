import { typeGenres } from '@/types/movie'

type typeMovie = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

// export default async function fetchMovies() {

//   const url =
//     'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'

//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: `Bearer ${import.meta.env.VITE_THEMOVIEDB_ACCESS_TOKEN}`
//     }
//   }

//   await fetch(url, options)
//     .then((res) => res.json())
//     .then((json) => console.log(json.results))
//     .catch((err) => console.error('error:' + err))
// }

const imgBaseUrl = 'http://image.tmdb.org/t/p/'

export default class fetchTMDB {
  static globalGenres: string[] = [
    'Action',
    'Adventure',
    'Animation',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'History',
    'Horror',
    'Music',
    'Mystery',
    'Romance',
    'Science Fiction',
    'TV Movie',
    'Thriller',
    'War',
    'Western'
  ]
  static globalGrenreskey = {
    Action: 28,
    Adventure: 12,
    Animation: 16,
    Comedy: 35,
    Crime: 80,
    Documentary: 99,
    Drama: 18,
    Family: 10751,
    Fantasy: 14,
    History: 36,
    Horror: 27,
    Music: 10402,
    Mystery: 9648,
    Romance: 10749,
    'Science Fiction': 878,
    'TV Movie': 10770,
    Thriller: 53,
    War: 10752,
    Western: 37
  }

  static async getMovies() {
    let data
    let error

    const url =
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_THEMOVIEDB_ACCESS_TOKEN}`
      }
    }

    try {
      const response = await fetch(url, options)
      const json = await response.json()

      data = json.results
      error = null
    } catch (err) {
      data = null
      error = err
    }

    return { data, error }
  }

  static async getMoviesByGenre(genre: typeGenres) {
    let data
    let error

    if (!this.globalGenres.includes(genre)) {
      data = null
      error = 'genre name is not included in the list of available genres.'
      return { data, error }
    }

    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${this.globalGrenreskey[genre]}`

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_THEMOVIEDB_ACCESS_TOKEN}`
      }
    }

    try {
      const response = await fetch(url, options)
      const json = await response.json()

      data = json.results
      error = null
    } catch (err) {
      data = null
      error = err
    }

    return { data, error }
  }
}
