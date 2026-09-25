import heroImage from '../assets/hero/hero-main.png'
import mobileHeroImage from '../assets/hero/hero-main_mobo.png'
import Navbar from './Navbar'
import TrustStrip from './TrustStrip'

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate flex flex-col overflow-hidden bg-[#071016] lg:block lg:h-[clamp(34rem,44vw,39rem)]">
      <picture className="absolute inset-x-0 top-16 -z-20 lg:inset-0">
        <source media="(min-width: 1024px)" srcSet={heroImage} />
        <img src={mobileHeroImage} alt="محصولات روشنایی نامی نور در محوطه یک کارخانه مدرن" className="h-auto w-full lg:size-full lg:object-cover lg:object-center" />
      </picture>
      <div className="absolute inset-x-0 top-16 -z-10 aspect-[1137/709] w-full bg-[linear-gradient(180deg,rgba(4,12,16,0.42)_0%,rgba(4,12,16,0.06)_18%,rgba(4,12,16,0)_67%,rgba(7,16,22,0.12)_76%,rgba(7,16,22,0.58)_92%,#071016_100%)] lg:hidden" />
      <div className="absolute inset-0 -z-10 hidden bg-[linear-gradient(90deg,rgba(4,12,16,0.20)_0%,rgba(4,12,16,0.06)_34%,rgba(4,12,16,0.72)_52%,rgba(4,12,16,0.99)_100%)] lg:block" />
      <Navbar />
      <div dir="ltr" className="flex w-full justify-center px-5 pb-5 pt-[calc(62.36vw+0.5rem)] sm:px-8 lg:absolute lg:inset-x-0 lg:top-16 lg:bottom-[5.6rem] lg:flex-1 lg:items-end lg:justify-end lg:px-[3.5%] lg:pb-10 lg:pt-0">
        <div dir="rtl" className="w-full max-w-[32rem] text-center lg:w-[35%] lg:max-w-[31rem] lg:text-right">
          <h1 id="hero-title" className="font-[Tahoma,sans-serif] text-[clamp(1.87rem,7.7vw,2.2rem)] font-black leading-[1.15] tracking-[-0.045em] text-white [-webkit-text-stroke:0.25px_currentColor] whitespace-nowrap sm:text-5xl lg:whitespace-nowrap lg:text-[clamp(2.55rem,3.4vw,3.825rem)] lg:[-webkit-text-stroke:0px_currentColor]">راهکارهای روشنایی<br /><span className="text-[#f6ca48]">برای صنعت و زندگی</span></h1>
          <p className="mt-3 mx-auto max-w-[21rem] whitespace-nowrap text-[15.5px] leading-6 text-white/82 sm:text-[19px] sm:leading-8 lg:mt-5 lg:mr-0 lg:ml-0 lg:h-[72px] lg:max-w-[29rem] lg:text-[19px] lg:leading-8 lg:whitespace-normal">طراحی و تولید انواع محصولات روشنایی LED<br />با کیفیت بالا برای فضاهای صنعتی و زندگی مدرن.</p>
          <div className="mt-5 flex w-full flex-nowrap justify-center gap-3 lg:mt-7 lg:w-auto lg:flex-wrap lg:justify-start">
            <a href="#" className="inline-flex h-[49px] basis-[58%] max-lg:order-2 items-center justify-center gap-2 whitespace-nowrap rounded-[9px] bg-[#f6ca48] px-3 text-[15px] font-bold text-[#111416] transition-colors hover:bg-[#ffda6a] sm:h-[65px] max-lg:sm:h-[62px] sm:px-9 sm:text-[21px] lg:basis-auto lg:flex-none"><span aria-hidden="true">←</span> مشاهده محصولات</a>
            <a href="#" className="inline-flex h-[49px] max-lg:order-1 flex-1 items-center justify-center whitespace-nowrap rounded-[9px] border border-white/75 px-3 text-[15px] font-bold text-white transition-colors hover:bg-white/10 sm:h-[65px] max-lg:sm:h-[62px] sm:px-9 sm:text-[21px] lg:flex-none">درباره ما</a>
          </div>
        </div>
      </div>
      <TrustStrip />
    </section>
  )
}

export default Hero
