import './index.css'

import { useEffect, useState } from 'react'
import { fetchTMDB } from '@/utilities'

const mockData = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/6gFB71pIo0PY3OOrojTQ97Qy8qq.jpg',
      genre_ids: [28, 36, 10752],
      id: 13922,
      original_language: 'en',
      original_title: 'The Great Raid',
      overview:
        'As World War II rages, the elite Sixth Ranger Battalion is given a mission of heroic proportions: push 30 miles behind enemy lines and liberate over 500 American prisoners of war.',
      popularity: 13.96,
      poster_path: '/k5Q76tzV2T4RtDdYwNj64c1qQ16.jpg',
      release_date: '2005-08-12',
      title: 'The Great Raid',
      video: false,
      vote_average: 6.6,
      vote_count: 321
    },
    {
      adult: false,
      backdrop_path: '/AiNPLAT4ltKanMm0IKjbGG39SE0.jpg',
      genre_ids: [80, 18, 28],
      id: 13939,
      original_language: 'en',
      original_title: 'Death Wish',
      overview:
        'After his wife is murdered by street punks, a pacifistic New York City architect becomes a one-man vigilante squad, prowling the streets for would-be muggers after dark.',
      popularity: 30.474,
      poster_path: '/3JnsRfPOIFboLxTcU5Wcz5haZ86.jpg',
      release_date: '1974-07-24',
      title: 'Death Wish',
      video: false,
      vote_average: 6.898,
      vote_count: 742
    },
    {
      adult: false,
      backdrop_path: '/3D5dUWVfrZPzS1ujtZf13HcZD63.jpg',
      genre_ids: [27, 878],
      id: 13946,
      original_language: 'en',
      original_title: 'The Rage',
      overview:
        'A crazed scientist experimenting with a rage virus on innocent victims in a laboratory in the woods. When his monstrous subjects escape and vultures devour their remains, they became mutations seeking to feed on humans.',
      popularity: 6.224,
      poster_path: '/uSE7BfeHvZWmt80rg7XPwmkYxxR.jpg',
      release_date: '2007-12-01',
      title: 'The Rage',
      video: false,
      vote_average: 3.854,
      vote_count: 41
    },
    {
      adult: false,
      backdrop_path: '/6M5Ups4jpS8rKdvnorBhGU2yNqw.jpg',
      genre_ids: [18, 12, 37, 10751, 28],
      id: 13965,
      original_language: 'en',
      original_title: 'The Man From Snowy River II',
      overview:
        'After a few years trying to earn money to marry Jessica Harrison, Jim Craig returns to Snowy River. But he finds that a lot of things have changed.',
      popularity: 7.76,
      poster_path: '/xI4m082loChSpB95hAxB6gxzSXK.jpg',
      release_date: '1988-03-24',
      title: 'The Man From Snowy River II',
      video: false,
      vote_average: 6.713,
      vote_count: 40
    },
    {
      adult: false,
      backdrop_path: '/lM55hahU9oRMZqjg7b6yUTs7EvK.jpg',
      genre_ids: [878],
      id: 945357,
      original_language: 'en',
      original_title: 'Oasis',
      overview:
        'A desperate survivor races for the most valuable resource in a dangerous and desolate wilderness.',
      popularity: 1.937,
      poster_path: '/cdQGsiPyGZEhCPliCk6ZTtUDC9R.jpg',
      release_date: '2021-05-13',
      title: 'Oasis',
      video: false,
      vote_average: 6.75,
      vote_count: 4
    },
    {
      adult: false,
      backdrop_path: '/gFrMOvNzOlWUuUa0sn2jJszEDuH.jpg',
      genre_ids: [35, 28, 12],
      id: 945384,
      original_language: 'es',
      original_title: 'Misión W2M',
      overview: '',
      popularity: 0.624,
      poster_path: '/22LuiBwUplfv3q2u9VxAMMsbS1z.jpg',
      release_date: '2013-11-01',
      title: 'Misión W2M',
      video: false,
      vote_average: 3,
      vote_count: 1
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [28, 878],
      id: 218668,
      original_language: 'en',
      original_title: 'Kakutobin Vol.3 : Soshite sekai no owari',
      overview:
        "Yuki (acted by Asami Kai), a senior high school student, is the leader of FIGHTING EXPRESS. Fujioka, who used to be a mercenary, is now a member of FIGHTING EXPRESS. One day a woman called Rei (acted by Kana Tsugihara) shows up to tell them she wants to join them. Rei is assigned the first mission after she has completed the hard training to join a member of FIGHTING EXPRESS with Fujioka. In Rei's first mission, there is a big conspiracy to threaten the continued existence of all humankind! Will Rei and Fujioka save the world?",
      popularity: 1.49,
      poster_path: null,
      release_date: '2008-03-31',
      title: 'Fighting Express Vol 3: End of the World',
      video: false,
      vote_average: 6,
      vote_count: 1
    }
  ]
}

type props = {
  movieId: number
}

function MoreMovies({ movieId }: props) {
  const [movies, setMovies] = useState([])

  async function getData() {
    const { data, error } = await fetchTMDB.getSimilarMovies(movieId)
    return data
  }

  useEffect(() => {
    console.log(getData())
  }, [])

  return (
    <div className="more-movies-container flex column">
      <div className="section-header">
        <h2 className="section-header-text">More Like This</h2>
      </div>
      <div className="link-container">
        <a href="" className="title-link">
          <img
            className="title-link-img"
            src="https://occ-0-3437-2705.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABckMjOU5AhTDaTEnhozhpVUnJ2ji0aBhTINCphY3PPsYHQj6fXrm6_ZTUntxr9rNHeRidYEpBEi_t1R-MDwdwiK8GOws3LqUlcIo.jpg?r=7f9"
            alt=""
          />
        </a>
        <a href="" className="title-link">
          <img
            className="title-link-img"
            src="https://occ-0-3437-2705.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABckMjOU5AhTDaTEnhozhpVUnJ2ji0aBhTINCphY3PPsYHQj6fXrm6_ZTUntxr9rNHeRidYEpBEi_t1R-MDwdwiK8GOws3LqUlcIo.jpg?r=7f9"
            alt=""
          />
        </a>
        <a href="" className="title-link">
          <img
            className="title-link-img"
            src="https://occ-0-3437-2705.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABckMjOU5AhTDaTEnhozhpVUnJ2ji0aBhTINCphY3PPsYHQj6fXrm6_ZTUntxr9rNHeRidYEpBEi_t1R-MDwdwiK8GOws3LqUlcIo.jpg?r=7f9"
            alt=""
          />
        </a>
        <a href="" className="title-link">
          <img
            className="title-link-img"
            src="https://occ-0-3437-2705.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABckMjOU5AhTDaTEnhozhpVUnJ2ji0aBhTINCphY3PPsYHQj6fXrm6_ZTUntxr9rNHeRidYEpBEi_t1R-MDwdwiK8GOws3LqUlcIo.jpg?r=7f9"
            alt=""
          />
        </a>
        <a href="" className="title-link">
          <img
            className="title-link-img"
            src="https://occ-0-3437-2705.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABckMjOU5AhTDaTEnhozhpVUnJ2ji0aBhTINCphY3PPsYHQj6fXrm6_ZTUntxr9rNHeRidYEpBEi_t1R-MDwdwiK8GOws3LqUlcIo.jpg?r=7f9"
            alt=""
          />
        </a>
        <a href="" className="title-link">
          <img
            className="title-link-img"
            src="https://occ-0-3437-2705.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABckMjOU5AhTDaTEnhozhpVUnJ2ji0aBhTINCphY3PPsYHQj6fXrm6_ZTUntxr9rNHeRidYEpBEi_t1R-MDwdwiK8GOws3LqUlcIo.jpg?r=7f9"
            alt=""
          />
        </a>
      </div>
    </div>
  )
}
export default MoreMovies
