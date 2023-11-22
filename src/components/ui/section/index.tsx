import './index.css'

interface myProps {
  clasName?: string
  title: string
  description: string
  imgSrc: string
  isReversed?: boolean
  bgVideo?: string
}

/**
 * `Section` returns Collapse component.
 *
 * It takes title, description, imgSrc as parameters.
 * @param title, a string which is the component's title and displayed in a h1 tag.
 * @param description, a string which is the component's description.
 * @param imgSrc, a string to an Image Source url.
 * @param isReversed, a boolean which determines either the section is reversed or not.
 * @param bgVideo, a background video that plays.
 *
 * @returns a custom section tsx tag
 *
 * ```tsx
 * import Section from '@/components/ui/section'
 *
 * <Section
 *      title="Enjoy on your TV"
 *      description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
 *      imgSrc="/images/getting-started/tv.png"
 *      bgVideo="/videos/tv.m4v"
 *    />
 * ```
 */
export default function Index({
  clasName,
  title,
  description,
  imgSrc,
  isReversed = false,
  bgVideo
}: myProps) {
  return (
    <section className={`section-container ${isReversed ? 'reverse' : ''} ${clasName}`}>
      <div className="section-left">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="section-right">
        <div className="section-righ-container">
          <img src={imgSrc} className="section-right-img" />

          <video autoPlay playsInline loop muted className="section-right-video">
            <source src={bgVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}
