import './styles/global.css'

import DevicesImage from '@/assets/device-pile.png'
import MobileImage from '@/assets/mobile-0819.jpg'
import TVImage from '@/assets/tv.png'
import Section from '@/components/section'

function App() {
  return (
    <div>
      <Section
        title="Enjoy on your TV"
        description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        imgSrc={TVImage}
      ></Section>

      <Section
        title="Ready for more"
        description="eh w eza sho b3melak"
        imgSrc={MobileImage}
        isReversed={true}
      ></Section>

      <Section
        title="Ready for more"
        description="eh w eza sho b3melak"
        imgSrc={DevicesImage}
      ></Section>
    </div>
  )
}

export default App
