import './index.css'

interface myProps {
  title: string
  description: string
  imgSrc: string
  isReversed?: false
}

const index: React.FC<myProps> = ({ title, description, imgSrc, isReversed }) => {
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
