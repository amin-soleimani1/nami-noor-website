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
    <section aria-labelledby="manufacturing-quality-title" className="bg-[#eeebe4] px-5 py-14 text-[#1b1d1d] sm:px-8 lg:px-[3.5%] lg:py-20">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[42rem]">
          <p className="mb-2 text-[11px] font-bold tracking-[0.16em] text-[#d6a632]">PRODUCTION QUALITY</p>
          <h2 id="manufacturing-quality-title" className="max-w-xl text-[clamp(1.75rem,3vw,2.7rem)] font-black leading-[1.2] tracking-[-0.04em]">کیفیت در تمام مراحل تولید</h2>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#555957] lg:text-base">از طراحی مهندسی‌شده تا ارزیابی نهایی محصول، رویکرد نامی نور بر دقت فنی، کیفیت پایدار و انتخاب راهکار مناسب برای هر کاربرد استوار است.</p>

          <div className="mt-7 grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:mt-9">
            {qualityPoints.map((point) => (
              <div key={point.title} className="flex gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-[#d6a632]/35 bg-[#d6a632]/10 text-[#e2b23e]">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round">{point.icon}</svg>
                </span>
                <div>
                  <h3 className="text-[15px] font-bold text-[#202426]">{point.title}</h3>
                  <p className="mt-1 text-[12px] leading-5 text-[#686b69]">{point.description}</p>
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
