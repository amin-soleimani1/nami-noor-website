import { useRef } from 'react'
import highbayImage from '../assets/products/highbay-200.jpg'
import projectorImage from '../assets/products/projector-150.jpg'
import bulbImage from '../assets/products/bulb-20.jpeg'
import streetlightImage from '../assets/products/streetlight-250.jpg'

const products = [
  { image: highbayImage, alt: 'چراغ سوله‌ای LED پارس اسکای ۲۰۰ وات', title: 'چراغ سوله‌ای LED', model: 'پارس اسکای ۲۰۰ وات', specs: ['200W', 'LED', 'کاربری صنعتی'], desktopImageClass: 'lg:max-h-[8.5rem] lg:max-w-[96%]' },
  { image: projectorImage, alt: 'پروژکتور شبکه‌ای پارس اسکای ۱۵۰ وات', title: 'پروژکتور شبکه‌ای', model: 'پارس اسکای ۱۵۰ وات', specs: ['150W', 'IP66', 'فضای باز'], desktopImageClass: 'lg:max-h-[8.25rem] lg:max-w-full' },
  { image: bulbImage, alt: 'لامپ حبابی LED پارس اسکای ۲۰ وات', title: 'لامپ حبابی LED', model: 'پارس اسکای ۲۰ وات', specs: ['20W', 'سرپیچ استاندارد', 'روشنایی عمومی'], desktopImageClass: 'lg:max-h-[8.5rem] lg:max-w-[92%]' },
  { image: streetlightImage, alt: 'چراغ خیابانی LED پارس اسکای ۲۵۰ وات', title: 'چراغ خیابانی LED', model: 'پارس اسکای ۲۵۰ وات', specs: ['250W', 'LED', 'معابر و محوطه‌ها'], desktopImageClass: 'lg:max-h-[8rem] lg:max-w-full' },
]

function ArrowIcon({ className = '' }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className={`size-4 fill-none stroke-current stroke-[1.8] ${className}`}><path d="M5 12h13M13 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function RailControl({ direction, onClick, label }) {
  return (
    <button type="button" onClick={onClick} aria-label={label} className={`grid size-9 place-items-center rounded-full border border-black/10 bg-[#fcfbf7] text-[#303333] transition-colors hover:border-[#bd8b1e] hover:text-[#a97812] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#a97812] ${direction === 'next' ? '' : 'rotate-180'}`}>
      <ArrowIcon />
    </button>
  )
}

function FeaturedProducts() {
  const railRef = useRef(null)
  const scrollRail = (direction) => railRef.current?.scrollBy({ left: direction * 320, behavior: 'smooth' })

  return (
    <section aria-labelledby="featured-products-title" className="relative overflow-hidden bg-[#f8f6f1] px-5 pb-14 pt-9 text-[#1b1d1d] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-0 before:h-px before:shadow-[0_-8px_28px_rgba(0,0,0,0.075)] sm:px-8 lg:px-[3.5%] lg:pb-20 lg:pt-12 lg:before:shadow-[0_-12px_34px_rgba(0,0,0,0.11)]">
      <div className="relative z-10 mx-auto max-w-[1240px]">
        <header className="mb-5 flex flex-col items-start gap-2 lg:mb-6 lg:flex-row lg:items-end lg:justify-between lg:gap-5">
          <div>
            <p className="mb-1 text-[11px] font-bold tracking-[0.16em] text-[#b38218] lg:mb-2">FEATURED PRODUCTS</p>
            <h2 id="featured-products-title" className="text-2xl font-black tracking-[-0.035em] lg:text-[30px]">محصولات منتخب</h2>
            <p className="mt-1 text-sm text-[#626565] lg:mt-2 lg:text-[15px]">منتخبی از محصولات نامی نور برای کاربردهای مختلف</p>
            <a href="#" className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#484b4a] transition-colors hover:text-[#a97812] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a97812] lg:hidden">مشاهده همه محصولات <ArrowIcon /></a>
          </div>
          <div className="hidden items-center gap-3 lg:flex">
            <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-[#484b4a] transition-colors hover:text-[#a97812] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a97812]">مشاهده همه محصولات <ArrowIcon /></a>
            <div className="flex items-center gap-2" dir="ltr">
              <RailControl direction="previous" label="نمایش محصولات قبلی" onClick={() => scrollRail(-1)} />
              <RailControl direction="next" label="نمایش محصولات بعدی" onClick={() => scrollRail(1)} />
            </div>
          </div>
        </header>

        <div ref={railRef} tabIndex="0" aria-label="محصولات منتخب" className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8 lg:mx-0 lg:gap-5 lg:px-0">
          {products.map((product) => (
            <a key={product.title} href="#" className="group flex min-h-[25rem] w-[82%] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-black/10 bg-[#fcfbf7] transition-colors duration-300 hover:border-black/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a97812] lg:h-[15rem] lg:min-h-0 lg:w-[calc((100%-3.75rem)/4)]">
              <div className="flex h-48 items-center justify-center bg-[#f1f0ec] p-6 lg:h-36 lg:bg-transparent lg:p-1">
                <img src={product.image} alt={product.alt} className={`size-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02] ${product.desktopImageClass}`} />
              </div>
              <div className="flex flex-1 flex-col p-4 lg:pb-2 lg:pt-0">
                <h3 className="text-[17px] font-black leading-6 text-[#202323] lg:text-[18px] lg:leading-5">{product.title}</h3>
                <p className="mt-1 text-[13px] text-[#676a69] lg:mt-0 lg:leading-4">{product.model}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5 lg:mt-1 lg:gap-1" aria-label="مشخصات محصول">
                  {product.specs.map((spec) => <li key={spec} className="rounded-md bg-[#efeee9] px-2 py-1 text-[11px] font-semibold text-[#4d5150] lg:px-1.5 lg:py-0">{spec}</li>)}
                </ul>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[13px] font-semibold text-[#3f4342] transition-colors group-hover:text-[#a97812] lg:pt-1 lg:leading-4">مشاهده محصول <ArrowIcon className="text-[#b38218] transition-transform duration-300 group-hover:-translate-x-0.5" /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
