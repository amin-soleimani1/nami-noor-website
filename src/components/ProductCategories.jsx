import cheraghImage from '../assets/categories/cheragh.png'
import lampImage from '../assets/categories/lamp.png'
import projectorImage from '../assets/categories/projector.png'
import panelImage from '../assets/categories/panel.png'
import riseImage from '../assets/categories/rise.png'

const categories = [
  { title: 'لامپ‌ها', subtitle: 'منابع نوری متنوع', image: lampImage, alt: 'دو لامپ روشن نامی نور', position: 'object-center' },
  { title: 'پروژکتورها', subtitle: 'روشنایی قدرتمند فضای باز', image: projectorImage, alt: 'پروژکتور LED روشن نامی نور', position: 'object-[42%_center]' },
  { title: 'پنل‌ها', subtitle: 'روکار و توکار', image: panelImage, alt: 'پنل‌های روشنایی سقفی', position: 'object-center' },
  { title: 'ریسه‌های نواری', subtitle: 'نورپردازی خطی و دکوراتیو', image: riseImage, alt: 'ریسه LED نواری روشن', position: 'object-center' },
]

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-none stroke-current stroke-[1.8]"><path d="M5 12h13M13 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function ProductCategories() {
  return (
    <section aria-labelledby="product-categories-title" className="bg-[#f6f3ed] px-5 py-14 text-[#1b1d1d] sm:px-8 lg:px-[3.5%] lg:py-20">
      <div className="mx-auto max-w-[1240px]">
        <header className="mb-8 flex flex-wrap items-end justify-between gap-5 lg:mb-10">
          <div>
            <p className="mb-2 text-[11px] font-bold tracking-[0.16em] text-[#b38218]">PRODUCT CATEGORIES</p>
            <h2 id="product-categories-title" className="text-2xl font-black tracking-[-0.035em] lg:text-[31px]">دسته‌بندی محصولات</h2>
            <p className="mt-2 text-sm text-[#626565] lg:text-[15px]">راهکارهای روشنایی متناسب با هر فضا و کاربرد</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-[#484b4a] transition-colors hover:text-[#a97812] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a97812]">مشاهده همه محصولات <ArrowIcon /></a>
        </header>

        <div className="grid gap-4 lg:grid-cols-[1.08fr_1fr] lg:gap-5">
          <a href="#" className="group relative min-h-[23rem] overflow-hidden rounded-xl border border-black/10 bg-[#242525] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a97812] lg:min-h-[32rem]">
            <img src={cheraghImage} alt="چراغ صنعتی در سوله" className="absolute inset-0 size-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,11,0.04)_25%,rgba(5,9,11,0.24)_55%,rgba(5,9,11,0.84)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 lg:p-8">
              <div>
                <h3 className="text-2xl font-black text-white lg:text-[30px]">چراغ‌ها</h3>
                <p className="mt-1 text-sm text-white/72 lg:text-[15px]">صنعتی، سوله‌ای و خیابانی</p>
              </div>
              <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/50 text-white transition-transform duration-300 group-hover:-translate-x-1"><ArrowIcon /></span>
            </div>
          </a>

          <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
            {categories.map((category) => (
              <a key={category.title} href="#" className="group relative min-h-56 overflow-hidden rounded-xl border border-black/10 bg-[#242525] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a97812] lg:min-h-0">
                <img src={category.image} alt={category.alt} className={`absolute inset-0 size-full object-cover ${category.position} transition-transform duration-500 ease-out group-hover:scale-[1.03]`} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,11,0.02)_22%,rgba(5,9,11,0.24)_56%,rgba(5,9,11,0.82)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                  <div>
                    <h3 className="text-xl font-black text-white">{category.title}</h3>
                    <p className="mt-1 text-[13px] text-white/72">{category.subtitle}</p>
                  </div>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-white/45 text-white transition-transform duration-300 group-hover:-translate-x-1"><ArrowIcon /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductCategories
