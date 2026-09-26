const trustItems = [
  { title: 'مصرف بهینه انرژی', description: 'روشنایی پایدار و کم‌مصرف', icon: <path d="M12 3C7 3.8 4 7.2 4 12c0 4.4 3.6 8 8 8 4.8 0 8.2-3 9-8-3.2 0-5.8 1-7.5 2.8C12.8 10.8 11.2 7.2 12 3Z M3 21c4.2-5.6 8.3-7.8 13.5-8.3" /> },
  { title: 'کیفیت مطمئن', description: 'استاندارد و بادوام', icon: <><path d="M12 3 19 6v5c0 4.7-2.8 8-7 10-4.2-2-7-5.3-7-10V6l7-3Z" /><path d="m8.7 12.1 2.1 2.1 4.5-4.6" /></> },
  { title: 'تولید در ایران', description: 'با تکیه بر دانش فنی', icon: <><path d="M4 20V9l5-3v4h4V5l7 3v12" /><path d="M2 20h20M8 14v3m4-3v3m4-3v3" /></> },
  { title: 'راهکارهای تخصصی', description: 'متناسب با نیاز پروژه شما', icon: <><circle cx="12" cy="12" r="3" /><path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1" /></> },
]

function TrustStrip() {
  return (
    <section aria-label="ویژگی‌های نامی نور" className="relative z-10 mt-auto border-t border-white/15 bg-[rgba(8,18,22,0.78)] text-white backdrop-blur-[8px] lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0">
      <div className="grid h-44 w-full grid-cols-2 px-2 sm:px-8 lg:h-[4.275rem] lg:grid-cols-4 lg:px-[3.5%]">
        {trustItems.map((item, index) => <div key={item.title} className={`relative flex flex-col items-center justify-center gap-1 px-1 py-2 text-center lg:flex-row lg:gap-3 lg:px-6 lg:py-3 lg:text-right lg:justify-center ${index % 2 === 1 ? 'before:absolute before:right-0 before:top-1/2 before:h-10 before:w-px before:-translate-y-1/2 before:bg-white/25' : ''} ${index >= 2 ? 'after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-white/25 lg:after:hidden' : ''} ${index > 0 ? 'lg:before:absolute lg:before:right-0 lg:before:top-1/2 lg:before:h-10 lg:before:w-px lg:before:-translate-y-1/2 lg:before:bg-white/25' : ''}`}>
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7 shrink-0 fill-none stroke-[#f6ca48] stroke-[1.5] lg:size-9" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
          <div><p className="text-[10px] font-bold leading-3 text-white lg:text-[16.2px] lg:leading-5">{item.title}</p><p className="hidden lg:mt-0.5 lg:block lg:text-[13.5px] lg:leading-5 lg:text-white/65">{item.description}</p></div>
        </div>)}
      </div>
    </section>
  )
}

export default TrustStrip
