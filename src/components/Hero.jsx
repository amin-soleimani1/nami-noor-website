import desktopHeroImage from '../assets/hero/new_hero_p03.png'
import mobileHeroImage from '../assets/hero/new_hero_mobo.png'
import Navbar from './Navbar'

function Hero() {
  return (
    <section
      aria-label="معرفی نامی نور"
      className="relative isolate flex aspect-[939/1354] min-h-0 flex-col overflow-hidden bg-[#071016] text-white lg:block lg:min-h-[clamp(31rem,33.4vw,43rem)] lg:aspect-auto"
    >
      <picture className="absolute inset-x-0 top-0 -z-20 lg:inset-0">
        <source media="(min-width: 1024px)" srcSet={desktopHeroImage} />
        <img
          src={mobileHeroImage}
          alt="فرایند تولید محصولات روشنایی در کارخانه نامی نور"
          className="h-auto w-full lg:size-full lg:object-cover lg:object-center"
        />
      </picture>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-28 bg-[linear-gradient(180deg,rgba(5,10,12,0.35)_0%,transparent_100%)] lg:hidden" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-1/2 bg-[linear-gradient(90deg,transparent_0%,rgba(5,10,12,0.14)_30%,rgba(5,10,12,0.60)_68%,rgba(5,10,12,0.82)_100%)] lg:block" />

      <Navbar />

      <div className="relative z-10 flex flex-1 px-5 pt-20 sm:px-8 sm:pt-24 lg:absolute lg:inset-x-0 lg:top-16 lg:bottom-[4.275rem] lg:items-center lg:px-[5.5%] lg:pt-0">
        <div dir="rtl" className="max-w-[18rem] text-right sm:max-w-[24rem] lg:hidden">
          <h1
            className="hero-mobile-enter font-[Tahoma,sans-serif] text-[clamp(2rem,9vw,3rem)] font-black leading-[1.13] tracking-[-0.045em] text-[#faf9f5] sm:text-[clamp(2.7rem,7vw,4rem)] lg:text-[clamp(2.8rem,4vw,4.5rem)]"
          >
            روشنایی،<br />
            <span className="text-[#f6ca48]">از دل تولید</span>
          </h1>
          <p className="hero-mobile-enter hero-enter-delayed mt-4 max-w-[19rem] text-[0.82rem] leading-6 text-white/75 sm:mt-5 sm:max-w-[22rem] sm:text-base sm:leading-8 lg:mt-6 lg:max-w-[25rem] lg:text-[1.05rem]">
            طراحی و تولید محصولات روشنایی با تمرکز بر کیفیت و دوام
          </p>
          <a
            href="#product-categories-title"
            className="hero-mobile-enter hero-enter-cta group mt-6 inline-flex min-h-10 items-center gap-2 rounded-full border border-[#f6ca48]/85 bg-black/10 py-1 pr-1.5 pl-4 text-[0.82rem] font-semibold text-[#faf9f5] transition-colors hover:border-[#f6ca48] hover:bg-black/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f6ca48] sm:min-h-11 sm:px-5 sm:text-sm lg:mt-7 lg:min-h-12 lg:justify-center lg:rounded-none lg:border-[#f6ca48] lg:bg-[#f6ca48] lg:px-6 lg:text-[0.95rem] lg:font-bold lg:text-[#111416]"
          >
            <span>مشاهده محصولات</span>
            <span aria-hidden="true" className="grid size-8 place-items-center rounded-full bg-[#f6ca48] text-base text-[#111416] transition-transform duration-200 group-hover:-translate-x-1 sm:size-9 lg:hidden">←</span>
          </a>
        </div>
        <div dir="rtl" className="hidden w-[clamp(22rem,32vw,31rem)] text-right lg:ml-auto lg:block">
          <div className="hero-enter flex items-center gap-3 text-[0.76rem] font-semibold tracking-[0.08em] text-[#f8f4e9]/80">
            <span>نامی نور</span>
            <span aria-hidden="true" className="h-px w-9 bg-[#f6ca48]" />
          </div>
          <h1 className="hero-enter mt-5 font-[Tahoma,sans-serif] text-[clamp(3.15rem,4.3vw,5rem)] font-black leading-[1.06] tracking-[-0.055em] text-[#faf9f5]">
            از کارخانه<br />
            <span>تا </span><span className="text-[#f6ca48]">زندگی</span> شما
          </h1>
          <p className="hero-enter hero-enter-delayed mt-6 max-w-[20rem] text-[1.02rem] leading-8 text-white/72">
            محصولات روشنایی برای فضاهای امروز
          </p>
          <a
            href="#product-categories-title"
            className="hero-enter hero-enter-cta group mt-8 inline-flex min-h-14 items-center gap-3 rounded-full border border-[#f6ca48]/85 bg-black/10 py-1 pr-2 pl-5 text-[0.98rem] font-semibold text-[#faf9f5] transition-colors hover:border-[#f6ca48] hover:bg-black/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f6ca48]"
          >
            <span>مشاهده محصولات</span>
            <span aria-hidden="true" className="grid size-10 place-items-center rounded-full bg-[#f6ca48] text-lg text-[#111416] transition-transform duration-200 group-hover:-translate-x-1">←</span>
          </a>
        </div>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-8 bg-[linear-gradient(180deg,transparent_0%,rgba(5,10,12,0.24)_100%)] lg:hidden" />
    </section>
  )
}

export default Hero
