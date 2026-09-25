import heroImage from '../assets/hero/hero-main.png'
import Navbar from './Navbar'
import TrustStrip from './TrustStrip'

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-[42rem] flex-col overflow-hidden bg-[#071016] lg:block lg:h-[clamp(34rem,44vw,39rem)] lg:min-h-0">
      <img src={heroImage} alt="محصولات روشنایی نامی نور در محوطه یک کارخانه مدرن" className="absolute inset-0 -z-20 size-full object-cover object-[52%_center] lg:object-center" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,12,16,0.20)_0%,rgba(4,12,16,0.06)_34%,rgba(4,12,16,0.72)_52%,rgba(4,12,16,0.99)_100%)]" />
      <Navbar />
      <div dir="ltr" className="flex w-full flex-1 items-center justify-end px-5 py-16 sm:px-8 lg:absolute lg:inset-x-0 lg:top-16 lg:bottom-[5.6rem] lg:items-end lg:px-[3.5%] lg:pb-10 lg:pt-0">
        <div dir="rtl" className="w-full max-w-[32rem] text-right lg:w-[35%] lg:max-w-[31rem]">
          <h1 id="hero-title" className="font-[Tahoma,sans-serif] text-5xl font-black leading-[1.15] tracking-[-0.045em] text-white sm:text-6xl lg:whitespace-nowrap lg:text-[clamp(2.55rem,3.4vw,3.825rem)]">راهکارهای روشنایی<br /><span className="text-[#f6ca48]">برای صنعت و زندگی</span></h1>
          <p className="mt-5 max-w-[30rem] text-[19px] leading-8 text-white/82 lg:h-[72px] lg:max-w-[29rem] lg:text-[19px]">طراحی و تولید انواع محصولات روشنایی LED<br className="hidden lg:block" /> با کیفیت بالا برای فضاهای صنعتی و زندگی مدرن.</p>
          <div className="mt-7 flex flex-wrap justify-start gap-3">
            <a href="#" className="inline-flex h-[65px] items-center gap-3 rounded-[9px] bg-[#f6ca48] px-9 text-[21px] font-bold text-[#111416] transition-colors hover:bg-[#ffda6a]"><span aria-hidden="true">←</span> مشاهده محصولات</a>
            <a href="#" className="inline-flex h-[65px] items-center justify-center rounded-[9px] border border-white/75 px-9 text-[21px] font-bold text-white transition-colors hover:bg-white/10">درباره ما</a>
          </div>
        </div>
      </div>
      <TrustStrip />
    </section>
  )
}

export default Hero
