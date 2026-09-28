import Hero from './components/Hero'
import ProductCategories from './components/ProductCategories'
import FeaturedProducts from './components/FeaturedProducts'
import ManufacturingQuality from './components/ManufacturingQuality'
import TrustStrip from './components/TrustStrip'

function App() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f6f5f1] text-[#181817]">
      <Hero />
      <TrustStrip />
      <ProductCategories />
      <FeaturedProducts />
      <ManufacturingQuality />
    </main>
  )
}

export default App
