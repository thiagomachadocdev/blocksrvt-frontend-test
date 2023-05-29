import { useState } from 'react'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import PremiumMessage from './components/PremiumMessage'
import PremiumMessageMobile from './components/PremiumMessageMobile'
import Subheader from './components/Subheader'

function App() {
  const [premiumMessageIsHide, setPremiumMessageIsHide] = useState(false)

  return (
    <div className="lg:pt-[84px]">
      <PremiumMessage />
      <PremiumMessageMobile
        premiumMessageIsHide={premiumMessageIsHide}
        setPremiumMessageIsHide={setPremiumMessageIsHide}
      />

      <Header />
      <Subheader />

      <Content />

      <Footer />
    </div>
  )
}

export default App

