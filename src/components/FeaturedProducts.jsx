import { useRef } from 'react'
import highbayImage from '../assets/products/highbay-200.jpg'
import projectorImage from '../assets/products/projector-150.jpg'
import bulbImage from '../assets/products/bulb-20.jpeg'
import streetlightImage from '../assets/products/streetlight-250.jpg'
import ledStripImage from '../assets/products/led-strip.png'

const products = [
  { image: highbayImage, alt: 'چراغ سوله‌ای LED پارس اسکای ۲۰۰ وات', title: 'چراغ سوله‌ای LED', model: 'پارس اسکای ۲۰۰ وات', specs: ['200W', 'LED', 'کاربری صنعتی'], desktopImageClass: 'lg:max-h-[8.5rem] lg:max-w-[96%]' },
  { image: projectorImage, alt: 'پروژکتور شبکه‌ای پارس اسکای ۱۵۰ وات', title: 'پروژکتور شبکه‌ای', model: 'پارس اسکای ۱۵۰ وات', specs: ['150W', 'IP66', 'فضای باز'], desktopImageClass: 'lg:max-h-[8.25rem] lg:max-w-full' },
  { image: bulbImage, alt: 'لامپ حبابی LED پارس اسکای ۲۰ وات', title: 'لامپ حبابی LED', model: 'پارس اسکای ۲۰ وات', specs: ['20W', 'سرپیچ استاندارد', 'روشنایی عمومی'], desktopImageClass: 'lg:max-h-[8.5rem] lg:max-w-[92%]' },
  { image: streetlightImage, alt: 'چراغ خیابانی LED پارس اسکای ۲۵۰ وات', title: 'چراغ خیابانی LED', model: 'پارس اسکای ۲۵۰ وات', specs: ['250W', 'LED', 'معابر و محوطه‌ها'], desktopImageClass: 'lg:max-h-[8rem] lg:max-w-full' },
  { image: ledStripImage, alt: 'ریسه نواری LED پارس اسکای', title: 'ریسه نواری LED', model: 'پارس اسکای', specs: ['LED', 'نورپردازی دکوراتیو', 'انعطاف‌پذیر'], desktopImageClass: 'lg:max-h-[8.25rem] lg:max-w-full', desktopOnly: true },
]

function ArrowIcon({ className = '' }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className={`size-4 fill-none stroke-current stroke-[1.8] ${className}`}><path d="M5 12h13M13 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function RailControl({ direction, onClick, label, className = '' }) {
  return (
    <button type="button" onClick={onClick} aria-label={label} className={`grid size-9 place-items-center rounded-full border border-black/10 bg-[#fcfbf7] text-[#303333] transition-colors hover:border-[#bd8b1e] hover:text-[#a97812] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#a97812] ${direction === 'next' ? '' : 'rotate-180'} ${className}`}>
      <ArrowIcon />
    </button>
  )
}

function FeaturedProducts() {
  const railRef = useRef(null)
  const scrollRail = (direction) => railRef.current?.scrollBy({ left: direction * 320, behavior: 'smooth' })

  return (
    <section aria-labelledby="featured-products-title" className="relative overflow-hidden bg-[#e8e4dc] px-5 pb-14 pt-9 text-[#1b1d1d] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-0 before:h-9 before:bg-[linear-gradient(180deg,rgba(0,0,0,0.16)_0%,rgba(0,0,0,0.06)_45%,transparent_100%)] before:shadow-none before:blur-[8px] sm:px-8 lg:px-[3.5%] lg:pb-20 lg:pt-8 lg:before:h-11 lg:before:bg-[linear-gradient(180deg,rgba(0,0,0,0.19)_0%,rgba(0,0,0,0.08)_45%,transparent_100%)] lg:before:blur-[10px]">
      <div className="relative z-10 mx-auto max-w-[1240px]">
        <header className="mb-4 flex flex-col items-center gap-1 text-center lg:relative lg:mb-6 lg:block">
          <div className="lg:mx-auto lg:w-fit">
            <p className="mb-1 text-[11px] font-bold tracking-[0.16em] text-[#b38218] lg:mb-2">FEATURED PRODUCTS</p>
            <h2 id="featured-products-title" className="text-2xl font-black tracking-[-0.035em] lg:text-[30px]">محصولات منتخب</h2>
            <p className="mt-1 text-sm text-[#626565] lg:mt-2 lg:text-[15px]">منتخبی از محصولات نامی نور برای کاربردهای مختلف</p>
            <a href="#" className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#484b4a] transition-colors hover:text-[#a97812] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a97812] lg:hidden">مشاهده همه محصولات <ArrowIcon /></a>
          </div>
          <div className="hidden items-center gap-3 lg:absolute lg:bottom-0 lg:left-0 lg:flex">
            <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-[#484b4a] transition-colors hover:text-[#a97812] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a97812]">مشاهده همه محصولات <ArrowIcon /></a>
          </div>
        </header>

        <div className="relative">
          <div ref={railRef} tabIndex="0" aria-label="محصولات منتخب" className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8 lg:mx-0 lg:justify-center lg:gap-5 lg:px-0">
            {products.map((product) => (
            <a key={product.title} href="#" className={`group ${product.desktopOnly ? 'hidden lg:flex' : 'flex'} min-h-[23rem] w-[79%] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-black/[0.06] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.025),0_12px_26px_rgba(0,0,0,0.07)] transition-colors duration-300 hover:border-black/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a97812] lg:h-[15rem] lg:min-h-0 lg:w-[calc((100%-5rem)/5)] lg:cursor-pointer lg:shadow-[0_2px_8px_rgba(0,0,0,0.025),0_12px_26px_rgba(0,0,0,0.07)] lg:transition-[border-color,box-shadow,background-color] lg:duration-300 lg:hover:border-black/[0.14] lg:hover:bg-white lg:hover:shadow-[0_2px_8px_rgba(0,0,0,0.03),0_14px_28px_rgba(0,0,0,0.085)]`}>
              <div className="flex h-44 items-center justify-center bg-white p-5 lg:h-36 lg:bg-transparent lg:p-1">
                <img src={product.image} alt={product.alt} className={`size-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02] lg:duration-300 ${product.desktopImageClass}`} />
              </div>
              <div className="flex flex-1 flex-col items-center p-4 text-center lg:items-stretch lg:pb-2 lg:pt-2 lg:text-right">
                <h3 className="text-[17px] font-black leading-6 text-[#202323] lg:text-[18px] lg:leading-5">{product.title}</h3>
                <p className="mt-1 text-[13px] text-[#676a69] lg:leading-4">{product.model}</p>
                <ul className="mt-2 flex flex-wrap justify-center gap-1.5 lg:mt-2 lg:justify-start lg:gap-1" aria-label="مشخصات محصول">
                  {product.specs.map((spec) => <li key={spec} className="rounded-md border border-black/[0.03] bg-[#f2f1ed] px-2 py-1 text-[11px] font-semibold text-[#4d5150] lg:px-1.5 lg:py-0">{spec}</li>)}
                </ul>
                <span className="hidden">مشاهده محصول <ArrowIcon /></span>
              </div>
            </a>
            ))}
          </div>
          <RailControl direction="next" label="نمایش محصولات بعدی" onClick={() => scrollRail(1)} className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 lg:grid" />
          <RailControl direction="previous" label="نمایش محصولات قبلی" onClick={() => scrollRail(-1)} className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 lg:grid" />
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
