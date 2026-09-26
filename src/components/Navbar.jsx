import namiNoorLogo from '../assets/brand/nami-noor-logo.png'

const navigationItems = ['محصولات', 'راهکارها', 'کیفیت و استانداردها', 'درباره ما', 'تماس با ما']

function SearchIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 fill-none stroke-current stroke-[1.8]"><circle cx="10.8" cy="10.8" r="6.2" /><path d="m15.5 15.5 4 4" strokeLinecap="round" /></svg>
}

function MenuIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-[1.8]"><path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" /></svg>
}

function Navbar() {
  return (
    <header className="relative z-10 h-[3.25rem] border-b border-white/15 bg-[rgba(5,15,20,0.76)] text-white backdrop-blur-[8px] lg:h-16">
      <div className="relative mx-auto flex h-full w-full items-center px-5 sm:px-8 lg:px-[3.5%]">
        <a href="#" className="absolute left-1/2 shrink-0 -translate-x-1/2 lg:right-[3.5%] lg:left-auto lg:translate-x-0" aria-label="نامی نور، صفحه اصلی"><img src={namiNoorLogo} alt="نامی نور" className="h-8 w-auto object-contain" /></a>
        <nav aria-label="ناوبری اصلی" className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
          <ul className="flex items-center gap-9 text-[16.5px] font-semibold text-white/90">{navigationItems.map((item) => <li key={item}><a href="#" className="transition-colors hover:text-[#f4c43c]">{item}</a></li>)}</ul>
        </nav>
        <div dir="ltr" className="absolute left-[3.5%] hidden items-center gap-3 lg:flex">
          <a href="#" className="inline-flex h-9 items-center gap-2.5 rounded-[9px] bg-[#f6ca48] px-[18px] text-[16.5px] font-bold text-[#111416] transition-colors hover:bg-[#ffda6a]">
            <span aria-hidden="true">←</span> مشاهده محصولات
          </a>
          <button type="button" aria-label="جستجو" className="grid size-9 place-items-center text-white/95 transition-colors hover:text-[#f4c43c]"><SearchIcon /></button>
        </div>
        <div className="absolute inset-x-5 flex items-center justify-between sm:inset-x-8 lg:hidden">
          <button type="button" aria-label="جستجو" className="grid size-10 place-items-center"><SearchIcon /></button>
          <button type="button" aria-label="باز کردن منو" className="grid size-10 place-items-center"><MenuIcon /></button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
