import '/src/components/MoreDetails/index.css'

const MoreDetails = () => {
  const details_array: { details_title: string; details: string }[] = [
    {
      details_title: 'Watch offline',
      details: 'Download and watch everywhere you go.'
    },
    {
      details_title: 'Genres',
      details: 'Classic Movies, Crime Movies, Drama Movies, Thriller Movies.'
    },
    {
      details_title: 'This movie is...',
      details: 'Violent'
    },
    {
      details_title: 'Audio',
      details: 'English - Audio Description, English [Original], French'
    },
    {
      details_title: 'Subtitles',
      details: 'Arabic, English, French'
    }
  ]
  const cast_names_array: string[] = [
    'Al Pacino',
    'Steven Bauer',
    'Michelle Pfeiffer',
    'Mary Elizabeth Mastrantonio',
    'Paul Shenar',
    'Robert Loggia',
    'Miriam Colon',
    'F. Murray Abraham',
    'Harris Yulin',
    'Ángel Salazar',
    'Pepe Serna'
  ]
  return (
    <>
      <div className="more-details-section flex column">
        <h2 className="title primary-text margin-6px full-width">More Details</h2>
        <div className="details-container flex row wrap full-width">
          {details_array.map((item) => {
            return (
              <div className="more-details-cell flex column item-width margin-6px">
                <div className="details-title font-16px secondary-text">
                  {item.details_title}
                </div>
                <div className="details-details font-16px primary-text">
                  {item.details}
                </div>
              </div>
            )
          })}
        </div>
        <div className="cast-container">
          <div className="cast-title font-16px secondary-text margin-6px full-width">
            Cast
          </div>
          <div className="cast-names flex row wrap full-width">
            {cast_names_array.map((name) => {
              return (
                <div className="cast-name item-width font-16px primary-text">{name}</div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default MoreDetails
