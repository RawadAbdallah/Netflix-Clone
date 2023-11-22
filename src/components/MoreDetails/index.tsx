import '/src/components/MoreDetails/index.css'

import { cast_names_array, details_array } from './data'

const MoreDetails = () => {
  return (
    <div className="more-details-section flex column">
      <h2 className="title primary-text margin-6px full-width">More Details</h2>
      <div className="details-container flex row wrap full-width">
        {details_array.map((item, index) => {
          return (
            <div
              className="more-details-cell flex column item-width margin-6px"
              key="index"
            >
              <div className="details-title font-16px secondary-text">
                {item.details_title}
              </div>
              <div className="details-details font-16px primary-text">{item.details}</div>
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
  )
}

export default MoreDetails
