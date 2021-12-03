import HeroNewProduct from '../src/components/HeroNewProduct/HeroNewProduct'
import ProductCards from '../src/components/ProductCard/ProductCard'
import FlashyHeroImage from '../src/components/FlashyHeroImage/FlashyHeroImage'
import MediumFlashyHeroImage from '../src/components/MediumFlashyHeroImage/MediumFlashyHeroImage'

function Home() {
  return (
    <main>
      <HeroNewProduct text={{
        announcement: "NEW PRODUCT",
        headline: "XX99 MARK II HEADPHONES",
        descr: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
      }} />
      <ProductCards />
      <FlashyHeroImage text={{
        headline: `ZX9\n SPEAKER`,
        descr: 'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.'
      }} />
      <MediumFlashyHeroImage text={{
        headline: 'ZX7 SPEAKER'
      }} />
    </main>
  )
}

export default Home