import './index.css'

interface myProps {
  title: string
  description: string
  imgSrc: string
  isReversed: boolean
}

/**
 * `Section()` returns Collapse component.
 *
 * It takes title, description, imgSrc and isReversed as parameters.
 * @param title, a string which is the component's title and displayed in a h1 tag.
 * @param description, a string which is the component's description.
 * @param imgSrc, a string to an Image Source url.
 * @param isReversed, a boolean which determines either the section is reversed or not.
 *
 * @returns a custom section tsx tag
 */

const index: React.FC<myProps> = ({ title, description, imgSrc, isReversed = false }) => {
  const sectionClassName: string = 'section-container ' + (isReversed ? 'reverse' : '')

  return (
    <section className={sectionClassName}>
      <div className="section-left">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="section-right">
        <img src={imgSrc} />
      </div>
    </section>
  )
}

export default index
