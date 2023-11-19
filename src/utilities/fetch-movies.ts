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
    } catch (err) {
      error = err
    }

    return { data, error }
  }

  
}
