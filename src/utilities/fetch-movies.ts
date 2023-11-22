import { MovieDetails, MovieProps, TypeGenres } from '@/types/movie'

export default class fetchTMDB {
  /**
   * Base api url for all requests to themoviesdb.
   */
  private static apiBaseUrl = 'https://api.themoviedb.org/3'

  /**
   * Movie genres available in themoviesdb api
   */
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

  /**
   * Genre id relative to the genre in themoviesdb api
   */
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

  /**
   * Fetch get method with headers and authorization key passed to it as an env variable.
   * Note: make sure to add VITE_THEMOVIEDB_ACCESS_TOKEN as an environment variable
   * in production and development.
   */
  private static fetchOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_THEMOVIEDB_ACCESS_TOKEN}`
    }
  }

  /**
   * `fetchRequest` returns the response of a request and handles errors
   *
   * @returns response of a fetch
   */
  private static async fetchRequest(url: string) {
    let dataReturned
    let errorReturned: string | null

    try {
      const response = await fetch(url, this.fetchOptions)
      const json = await response.json()

      dataReturned = json.results

      if (dataReturned === undefined) {
        dataReturned = null
        errorReturned = 'error occured during fetch'
      } else {
        errorReturned = null
      }
    } catch (err) {
      dataReturned = null
      errorReturned = 'error occured during fetch'

      console.log(err)
    }

    return { data: dataReturned, error: errorReturned }
  }

  /**
   * `getMovies` returns a list of random movies.
   *
   * @returns list of movies
   *
   * ```tsx
   * import { fetchTMDB } from "@/utilities"
   *
   * const { data, error } = await fetchTMDB.getMovies()
   * ```
   */
  static async getMovies() {
    const url = `${this.apiBaseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`

    const { data, error }: { data: MovieProps[] | null; error: string | null } =
      await this.fetchRequest(url)

    return { data, error }
  }

  /**
   * `getMoviesByGenre` returns a list of movies that are related to a specific genre.
   * It takes genre as a parameter.
   * @param genre
   *
   * @returns list of movies by genre
   *
   * ```tsx
   * import { fetchTMDB } from "@/utilities"
   *
   * const { data, error } = await fetchTMDB.getMoviesByGenre("Action")
   * ```
   */
  static async getMoviesByGenre(genre: TypeGenres) {
    if (!this.globalGenres.includes(genre)) {
      const data = null
      const error = 'genre name is not included in the list of available genres.'
      return { data, error }
    }

    const url = `${this.apiBaseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${this.globalGrenreskey[genre]}`

    const { data, error }: { data: MovieProps[] | null; error: string | null } =
      await this.fetchRequest(url)

    return { data, error }
  }

  /**
   * `getMovieDetails` returns an object of all the movie details and takes the movie id
   * as a parameter.
   * @param movieID
   *
   * @returns object with movie details
   *
   * ```tsx
   * import { fetchTMDB } from "@/utilities"
   *
   * const { data, error } = await fetchTMDB.getMovieDetails(00000)
   * ```
   */
  static async getMovieDetails(movieID: number) {
    if (!movieID) {
      const data = null
      const error = 'No movie id provided.'
      return { data, error }
    }

    const url = `${this.apiBaseUrl}/movie/${movieID}?language=en-US`

    const { data, error }: { data: MovieDetails | null; error: string | null } =
      await this.fetchRequest(url)

    return { data, error }
  }

  /**
   * `getSimilarMovies` returns a list of movies that are genre related to a
   * specific movie.
   * It takes the movie id as a parameter.
   * @param movieID
   *
   * @returns list of movies related to a specific genre.
   *
   * ```tsx
   * import { fetchTMDB } from "@/utilities"
   *
   * const { data, error } = await fetchTMDB.getSimilarMovies(00000)
   * ```
   */
  static async getSimilarMovies(movieID: number) {
    if (!movieID) {
      const data = null
      const error = 'No movie id provided.'
      return { data, error }
    }

    const url = `${this.apiBaseUrl}/movie/${movieID}/similar?language=en-US&page=1`

    const { data, error }: { data: MovieProps[] | null; error: string | null } =
      await this.fetchRequest(url)

    return { data, error }
  }

  /**
   * `getUpcomingMovies` returns a list of movies that will be released soon.
   *
   * @returns list of upcoming movies.
   *
   * ```tsx
   * import { fetchTMDB } from "@/utilities"
   *
   * const { data, error } = await fetchTMDB.getUpcomingMovies()
   * ```
   */
  static async getUpcomingMovies() {
    const url = `${this.apiBaseUrl}/movie/upcoming?language=en-US&page=1`

    const { data, error }: { data: MovieProps[] | null; error: string | null } =
      await this.fetchRequest(url)

    return { data, error }
  }
}
