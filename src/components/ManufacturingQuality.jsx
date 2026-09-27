import manufacturingConceptImage from '../assets/factory/manufacturing-concept.png'

const qualityPoints = [
  {
    title: 'کنترل کیفیت دقیق',
    description: 'ارزیابی جزئیات در مسیر آماده‌سازی محصول',
    icon: <path d="M12 3 19 6v5c0 4.7-2.8 8-7 10-4.2-2-7-5.3-7-10V6l7-3Zm-3.3 9.1 2.1 2.1 4.5-4.6" />,
  },
  {
    title: 'طراحی مهندسی‌شده',
    description: 'تکیه بر طراحی فنی و انتخاب آگاهانه اجزا',
    icon: <><path d="M4 20V9l5-3v4h4V5l7 3v12" /><path d="M2 20h20M8 14v3m4-3v3m4-3v3" /></>,
  },
  {
    title: 'بهره‌وری و دوام',
    description: 'تمرکز بر عملکرد پایدار در کاربردهای حرفه‌ای',
    icon: <path d="M12 3C7 3.8 4 7.2 4 12c0 4.4 3.6 8 8 8 4.8 0 8.2-3 9-8-3.2 0-5.8 1-7.5 2.8C12.8 10.8 11.2 7.2 12 3ZM3 21c4.2-5.6 8.3-7.8 13.5-8.3" />,
  },
  {
    title: 'راهکارهای متنوع روشنایی',
    description: 'راهکارهایی متناسب با نیاز فضاهای گوناگون',
    icon: <><circle cx="12" cy="12" r="3" /><path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1" /></>,
  },
]

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-none stroke-current stroke-[1.8]"><path d="M5 12h13M13 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function ManufacturingQuality() {
  return (
    <section aria-labelledby="manufacturing-quality-title" className="relative overflow-hidden bg-[#081216] px-5 py-14 text-white sm:px-8 lg:h-[clamp(30rem,35vw,34rem)] lg:px-0 lg:py-0">
      <figure className="relative mb-10 overflow-hidden bg-[#10191b] lg:absolute lg:inset-y-0 lg:left-0 lg:mb-0 lg:w-[60%] lg:overflow-visible lg:bg-transparent">
        <div className="relative aspect-[16/10] lg:size-full">
          <img src={manufacturingConceptImage} alt="تصویر مفهومی از فضای تولید و کنترل کیفیت" className="absolute inset-0 size-full object-contain object-left" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,11,13,0.5)_0%,rgba(5,11,13,0.08)_58%,rgba(5,11,13,0.2)_100%)] lg:hidden" />
          <figcaption className="absolute bottom-3 left-3 rounded-sm border border-white/10 bg-[#081216]/45 px-2.5 py-1 text-[10px] text-white/55 backdrop-blur-sm lg:bottom-6 lg:left-[3.5%]">تصویر مفهومی از فضای تولید</figcaption>
        </div>
      </figure>

      <div aria-hidden="true" className="pointer-events-none hidden lg:absolute lg:inset-y-0 lg:left-[25%] lg:block lg:w-[60%] lg:bg-[linear-gradient(to_right,rgba(8,18,22,0)_0%,rgba(8,18,22,0.03)_30%,rgba(8,18,22,0.2)_43%,rgba(8,18,22,0.62)_50%,rgba(8,18,22,0.84)_60%,rgba(8,18,22,0.96)_72%,#081216_95%,#081216_100%)]" />

      <div className="relative z-10 mx-auto max-w-[1240px] lg:h-full">
        <div className="lg:absolute lg:inset-y-0 lg:right-[3.5%] lg:flex lg:w-[42%] lg:flex-col lg:justify-center lg:pb-1">
          <p className="mb-2 text-[11px] font-bold tracking-[0.16em] text-[#d6a632]">PRODUCTION QUALITY</p>
          <h2 id="manufacturing-quality-title" className="max-w-xl text-[clamp(1.75rem,3vw,2.7rem)] font-black leading-[1.2] tracking-[-0.04em]">کیفیت در تمام مراحل تولید</h2>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/68 lg:text-base">از طراحی مهندسی‌شده تا ارزیابی نهایی محصول، رویکرد نامی نور بر دقت فنی، کیفیت پایدار و انتخاب راهکار مناسب برای هر کاربرد استوار است.</p>

          <div className="mt-7 grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:mt-9">
            {qualityPoints.map((point) => (
              <div key={point.title} className="flex gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-[#d6a632]/35 bg-[#d6a632]/10 text-[#e2b23e]">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round">{point.icon}</svg>
                </span>
                <div>
                  <h3 className="text-[15px] font-bold text-white">{point.title}</h3>
                  <p className="mt-1 text-[12px] leading-5 text-white/58">{point.description}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#" className="mt-8 inline-flex items-center gap-2 border-b border-[#d6a632]/55 pb-1 text-sm font-semibold text-[#f0c85d] transition-colors hover:border-[#f0c85d] hover:text-[#ffe08a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0c85d] lg:mt-10">بیشتر درباره ما <ArrowIcon /></a>
        </div>
      </div>
    </section>
  )
}

export default ManufacturingQuality
