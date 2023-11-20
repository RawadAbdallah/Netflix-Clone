/**
 * `Movie()` returns a clickable component with the movie's image and title.
 *
 * It takes variant, children, className as parameters.
 * @param movieURL ,string url that links to the movie's description page
 * @param movieImageSource ,string of the image source for the movie
 * @param movieTitle ,string for the movie's title
 * @param className ,are additional classes that can be assigned to the component
 *
 * @returns a customized <a> jsx tag that contains the movie's image and title.
 */

import React from 'react'

import './index.css'

interface SliderProps {
  children: React.ReactNode
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const [sliderIndex, setSliderIndex] = React.useState(0)
  const itemCount = React.Children.count(children)
  const itemsPerScreen = 4
  const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen)

  const handleClick = (direction: 'left' | 'right') => {
    let newIndex = sliderIndex
    if (direction === 'left') {
      newIndex = (sliderIndex - 1 + progressBarItemCount) % progressBarItemCount
    } else if (direction === 'right') {
      newIndex = (sliderIndex + 1) % progressBarItemCount
    }
    console.log(progressBarItemCount)
    console.log(newIndex)
    setSliderIndex(newIndex)
  }

  return (
    <div className="container">
      <button onClick={() => handleClick('left')} className="handle left-handle">
        Previous
      </button>
      <div className="slider" style={{ '--slider-index': sliderIndex }}>
        {children}
      </div>
      <button onClick={() => handleClick('right')} className="handle right-handle">
        Next
      </button>
    </div>
  )
}

export default Slider
