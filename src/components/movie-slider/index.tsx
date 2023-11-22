import './index.css'

import React, { useEffect, useState } from 'react'

type SliderProps = {
  children: React.ReactNode[]
  className?: string
}
/**
 * `Slider()` returns a slider for Movies Components.
 *
 * It takes children, className as parameters.
 * @param children ,are the Movie components passed to the slider
 * @param className ,are additional classes that can be assigned to the component
 *
 * @returns a responsive slider, built specifically for Movie component
 */

export default function Slider({ children, className }: SliderProps) {
  const TOTAL_SLIDE_ITEMS = children.length
  const [sliderIndex, setSliderIndex] = useState(0)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return
  }, [])

  let slidesPerWindow, slideWidth
  if (windowWidth < 600) {
    slidesPerWindow = Math.floor(windowWidth / 174)
    slideWidth = 174
  } else {
    slidesPerWindow = Math.floor(windowWidth / 308)
    slideWidth = 310
  }

  const numberOfSlides = Math.ceil(TOTAL_SLIDE_ITEMS / slidesPerWindow)

  function slideLeft() {
    if (sliderIndex == 0) {
      setSliderIndex(numberOfSlides - 1)
      return
    }
    setSliderIndex(sliderIndex - 1)
  }

  function slideRight() {
    if (sliderIndex == numberOfSlides - 1) {
      setSliderIndex(0)
      return
    }
    setSliderIndex(sliderIndex + 1)
  }

  return (
    <div className={`slider ${className}`}>
      <div className="handle previous" onClick={slideLeft}>
        <div className="handle-icon">
          <img src="src\assets\images\slider\left.png" />
        </div>
      </div>
      <div
        style={{
          transform: `translate(calc(-${slideWidth}px*${slidesPerWindow} * ${sliderIndex}))`
        }}
        className="slides"
      >
        {children}
      </div>
      <div className="handle next" onClick={slideRight}>
        <div className="handle-icon">
          <img src="src\assets\images\slider\right.png" />
        </div>
      </div>
    </div>
  )
}
