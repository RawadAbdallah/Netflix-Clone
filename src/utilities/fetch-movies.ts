import { MovieDetails, MovieProps, TypeGenres } from '@/types/movie'

export default class fetchTMDB {
  private static apiBaseUrl = 'https://api.themoviedb.org/3'

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
  private static globalGrenreskey = {
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

  private static fetchOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_THEMOVIEDB_ACCESS_TOKEN}`
    }
  }

  static async getMovies() {
    let data: MovieProps[] | null
    let error

    const url = `${this.apiBaseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`

    try {
      const response = await fetch(url, this.fetchOptions)
      const json = await response.json()

      data = json.results
      error = null
    } catch (err) {
      data = null
      error = err
    }

    return { data, error }
  }

  static async getMoviesByGenre(genre: TypeGenres) {
    let data: MovieProps[] | null
    let error

    if (!this.globalGenres.includes(genre)) {
      data = null
      error = 'genre name is not included in the list of available genres.'
      return { data, error }
    }

    const url = `${this.apiBaseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${this.globalGrenreskey[genre]}`

    try {
      const response = await fetch(url, this.fetchOptions)
      const json = await response.json()

      data = json.results
      error = null
    } catch (err) {
      data = null
      error = err
    }

    return { data, error }
  }

  static async getMovieDetails(movieID: number) {
    let data
    let error

    if (!movieID) {
      data = null
      error = 'No movie id provided.'
      return { data, error }
    }

    const url = `${this.apiBaseUrl}/movie/${movieID}?language=en-US`

    try {
      const response = await fetch(url, this.fetchOptions)
      data = await response.json()

      error = null
    } catch (err) {
      data = null
      console.error(err)
      error = err
    }

    return { data, error }
  }

  static async getMovieRecommendation(movieID: number) {
    let data: MovieProps[] | null
    let error

    if (!movieID) {
      data = null
      error = 'No movie id provided.'
      return { data, error }
    }

    const url = `${this.apiBaseUrl}/movie/${movieID}/recommendations?language=en-US&page=1`

    try {
      const response = await fetch(url, this.fetchOptions)
      const json = await response.json()

      data = json.results
      error = null
    } catch (err) {
      data = null
      error = err
    }

    return { data, error }
  }

  static async getUpcomingMovies() {
    let data: MovieProps[] | null
    let error

    const url = `${this.apiBaseUrl}/movie/upcoming?language=en-US&page=1`

    try {
      const response = await fetch(url, this.fetchOptions)
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
