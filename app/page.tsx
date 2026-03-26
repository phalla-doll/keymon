import Image from "next/image";
import { Menu, ArrowRight, Circle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-black font-sans selection:bg-[#FF4500] selection:text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 md:px-12 relative z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FF4500] rounded-lg grid grid-cols-2 gap-1 p-1.5">
             <div className="bg-white rounded-full"></div>
             <div className="bg-white rounded-full"></div>
             <div className="bg-white rounded-full"></div>
             <div className="bg-white rounded-full"></div>
          </div>
          <span className="font-bold text-xl tracking-tight">Keymon</span>
        </div>
        <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
          <Menu size={20} />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-4 pb-24 px-6 md:px-12">
        <div className="flex justify-end mb-8 relative z-10">
          <div className="max-w-sm">
            <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-4">
              Mechanical<br />Keyboards
            </h1>
            <p className="text-xs text-gray-600 leading-relaxed">
              We design and create premium mechanical keyboards<br/>that combine aesthetics, durability, and high performance<br/>for every typing experience.
            </p>
          </div>
        </div>

        {/* Huge Background Text */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden flex flex-col justify-center pointer-events-none z-0 select-none">
          <h2 className="text-[28vw] font-bold leading-[0.75] tracking-tighter text-black -ml-[2vw]">
            Ke<br/>ybo
          </h2>
        </div>

        {/* Hero Image */}
        <div className="relative z-10 mt-12 w-full max-w-6xl mx-auto h-[300px] md:h-[500px] lg:h-[600px]">
          <Image
            src="https://picsum.photos/seed/keyboard-hero/1600/900"
            alt="Typing on mechanical keyboard"
            fill
            className="object-cover rounded-3xl shadow-2xl"
            priority
          />
          {/* Decorative elements */}
          <div className="absolute bottom-12 left-12 w-8 h-8 bg-[#FF4500] rounded-full shadow-lg"></div>
          <div className="absolute bottom-24 left-1/2 w-8 h-8 bg-teal-200 rounded-full shadow-lg"></div>
          <div className="absolute bottom-16 right-24 w-16 h-10 bg-yellow-100 rounded-sm shadow-lg"></div>
        </div>
      </section>

      {/* Tags Marquee */}
      <section className="py-8 border-y border-gray-200 overflow-hidden bg-white relative z-10">
        <div className="flex justify-between items-center px-6 md:px-12 min-w-max gap-8 md:gap-16 overflow-x-auto no-scrollbar">
          {['MECHANICAL SWITCHES', 'PBT KEYCAPS', 'HOT-SWAPPABLE', 'RGB LIGHTING'].map((tag) => (
            <div key={tag} className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">
              <div className="w-1.5 h-1.5 bg-[#FF4500] rotate-45"></div>
              {tag} <ArrowRight size={10} />
            </div>
          ))}
        </div>
      </section>

      {/* Huge KEYBOARD Text */}
      <section className="py-16 overflow-hidden flex justify-center px-6 md:px-12 bg-white relative z-10">
        <h2 className="text-[16vw] font-bold leading-none tracking-tighter text-black flex items-center">
          KEY
          <span className="relative inline-block w-[12vw] h-[8vw] mx-[1vw] -translate-y-[1vw]">
            <Image src="https://picsum.photos/seed/keycap-small/400/300" alt="keycap" fill className="object-cover rounded-xl shadow-md" />
          </span>
          BOARD
          <span className="text-[#FF4500] relative -left-[2vw] mix-blend-multiply">.</span>
        </h2>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
        <div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-16">
            Work Smarter, Not<br />Harder. Seamless Typing.
          </h3>
          <div className="flex gap-6">
            <div className="flex flex-col gap-3">
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <Image src="https://picsum.photos/seed/kb-detail1/400/400" alt="Keyboard detail" fill className="object-cover rounded-2xl shadow-sm" />
              </div>
              <p className="text-[11px] font-mono text-gray-500 italic font-medium">// Produce everyday</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <Image src="https://picsum.photos/seed/kb-detail2/400/400" alt="Keyboard detail" fill className="object-cover rounded-2xl shadow-sm" />
                <div className="absolute top-3 right-3 w-3 h-3 bg-white rounded-full shadow-sm"></div>
              </div>
              <p className="text-[11px] font-mono text-gray-500 italic font-medium">// Affordable</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-2">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-900 font-medium">
            Say goodbye to mushy membrane keys and scattered focus. Our intuitive mechanical keyboards help <span className="text-gray-400">enthusiasts—from gamers to developers—achieve flow state effortlessly. With customizable switches, premium materials, and satisfying acoustics.</span>
          </p>
          <div className="flex flex-wrap items-center gap-8 mt-12">
            <button className="bg-[#111] text-white px-8 py-4 rounded-full flex items-center gap-3 text-sm font-medium hover:bg-gray-800 transition-colors">
              Learn more <ArrowRight size={16} />
            </button>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-2 border-white relative overflow-hidden shadow-sm"><Image src="https://picsum.photos/seed/user1/100/100" fill alt="User" className="object-cover" /></div>
                <div className="w-12 h-12 rounded-full border-2 border-white relative overflow-hidden shadow-sm"><Image src="https://picsum.photos/seed/user2/100/100" fill alt="User" className="object-cover" /></div>
                <div className="w-12 h-12 rounded-full border-2 border-white relative overflow-hidden shadow-sm"><Image src="https://picsum.photos/seed/user3/100/100" fill alt="User" className="object-cover" /></div>
              </div>
              <span className="text-xs text-gray-500 max-w-[80px] leading-tight font-medium">get to know us better</span>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-16 px-6 md:px-12 max-w-[100rem] mx-auto">
        <div className="relative w-full rounded-[2.5rem] overflow-hidden p-4 md:p-12 lg:p-20 min-h-[700px] flex items-center justify-center">
          {/* Background Image */}
          <Image src="https://picsum.photos/seed/kb-bg-acc/1920/1080" alt="Background" fill className="object-cover" />
          
          {/* Foreground Card */}
          <div className="relative z-10 bg-white/95 backdrop-blur-md w-full max-w-6xl rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-2xl">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                Accessories <div className="w-1.5 h-1.5 bg-[#FF4500] rounded-full"></div>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">Customizable Accessories & Support</h3>
              <p className="text-gray-500 text-sm max-w-lg leading-relaxed">Several additional accessories and supports that can be modified according to the needs of the keyboard user.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[350px] lg:h-[450px] rounded-3xl overflow-hidden shadow-lg">
                <Image src="https://picsum.photos/seed/kb-acc-detail/800/1000" alt="Accessories" fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-12">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h4 className="text-2xl font-medium mb-3 tracking-tight">Built for everyday performance</h4>
                    <p className="text-sm text-gray-500 max-w-md leading-relaxed">Rather than pushing unnecessary features, we design keyboards that support your daily tasks with precision, comfort, and reliability.</p>
                  </div>
                  <button className="w-10 h-10 bg-[#FF4500] text-white rounded-full flex items-center justify-center shrink-0 hover:bg-orange-600 transition-colors shadow-md">
                    <ArrowRight size={18} />
                  </button>
                </div>
                
                <div className="grid grid-cols-3 gap-4 md:gap-6">
                  {[
                    { title: 'Mechanical', desc: 'Choose our collection mechanical keyboard' },
                    { title: 'keycaps', desc: 'Choose our collection mechanical keyboard' },
                    { title: 'switch', desc: 'Choose our collection mechanical keyboard' },
                  ].map((item, i) => (
                    <div key={i} className="bg-[#F5F5F5] p-5 rounded-2xl flex flex-col justify-between aspect-square hover:bg-gray-200 transition-colors cursor-pointer">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm mb-1.5">{item.title}</h5>
                        <p className="text-[10px] text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Switches Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase mb-10">
          Switch <div className="w-1.5 h-1.5 bg-[#FF4500] rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-end">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight">
            Work Smarter, Not<br />Harder For Seamless
          </h3>
          <div className="flex lg:justify-end pb-2">
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              The component located beneath each key on a mechanical keyboard. This switch is a crucial part that determines how the keyboard will feel and sound when used.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          {[
            { num: '01', name: 'Cherry Mix', active: false },
            { num: '02', name: 'Kailh/Kaihua', active: false, img: 'https://picsum.photos/seed/switch-kailh/400/300' },
            { num: '03', name: 'Oetemu', active: true },
            { num: '04', name: 'Romer G', active: false },
          ].map((switchItem, i) => (
            <div key={i} className={`group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-gray-200 transition-all duration-300 ${switchItem.active ? 'bg-[#111] text-white px-8 -mx-8 rounded-2xl border-none shadow-xl my-2' : 'hover:bg-gray-50 px-8 -mx-8 rounded-2xl cursor-pointer'}`}>
              <div className="flex items-center gap-8 md:gap-12 mb-4 md:mb-0">
                <span className={`text-xs font-mono font-medium ${switchItem.active ? 'text-gray-400' : 'text-gray-400'}`}>{switchItem.num}</span>
                <h4 className="text-3xl md:text-4xl font-medium tracking-tight">{switchItem.name}</h4>
              </div>
              
              <div className="flex items-center justify-between md:justify-end gap-8 w-full md:w-auto">
                {switchItem.img && (
                  <div className="relative w-32 h-20 md:w-48 md:h-28 rounded-xl overflow-hidden shadow-md">
                    <Image src={switchItem.img} alt={switchItem.name} fill className="object-cover" />
                  </div>
                )}
                <button className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors shrink-0 ${switchItem.active ? 'border-gray-700 text-white hover:bg-white hover:text-black' : 'border-gray-300 text-black hover:bg-black hover:text-white'}`}>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-end overflow-hidden">
          <h2 className="text-[10vw] font-light tracking-tighter leading-none text-black -mr-[2vw]">
            -OPTIONS
          </h2>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 md:px-12 bg-[#F8F8F8] rounded-[3rem] mx-4 md:mx-8 mb-8 max-w-[100rem] xl:mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight">
            Elevate Your<br />Keyboard Experience
          </h3>
          <div className="flex lg:justify-end pt-4">
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              The keycaps are designed with a classic Cherry profile, engineered for the best typing experience. They won't tire you out even after hours of work or gaming.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12">
          <div className="xl:col-span-3 flex flex-col justify-between order-2 xl:order-1">
            <div className="mb-12 xl:mb-0">
              <h4 className="text-2xl font-medium mb-4 tracking-tight">Artisan Keycaps</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                We offer decorative keycaps and premium surface materials that balance aesthetics, consistency, and durability — perfect for gaming, productivity, and collectible setups.
              </p>
            </div>
            <button className="bg-[#111] text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 text-sm font-medium hover:bg-gray-800 transition-colors w-fit">
              Shop Now <ArrowRight size={16} />
            </button>
          </div>
          
          <div className="xl:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6 order-1 xl:order-2">
            <div className="relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-sm">
              <Image src="https://picsum.photos/seed/kb-exp-left/800/1000" alt="Keyboard experience" fill className="object-cover" />
            </div>
            <div className="relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-sm">
              <Image src="https://picsum.photos/seed/kb-exp-right/800/1000" alt="Keyboard experience" fill className="object-cover" />
              
              {/* Overlay Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] bg-white/95 backdrop-blur-md rounded-2xl p-4 flex gap-5 items-center shadow-xl">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <Image src="https://picsum.photos/seed/kb-sakura/200/200" alt="Sakura Pink" fill className="object-cover" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-500 font-medium">01</span>
                  <h5 className="font-medium text-sm mb-1">PBT Sakura Pink Series</h5>
                  <p className="text-[10px] text-gray-500 leading-relaxed">Sakura-themed double-shot PBT keycaps — durable, anti-shine, suitable for 60% to full-size keyboards.</p>
                </div>
              </div>
              
              <button className="absolute bottom-6 right-6 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-xl hover:bg-gray-100 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111] text-white pt-24 pb-8 px-6 md:px-12 rounded-t-[3rem] mx-2 md:mx-4 mt-2">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
            <div className="lg:col-span-5">
              <h4 className="text-2xl font-medium mb-10 max-w-md leading-snug tracking-tight">Subscribe to our newsletter and get your daily boost of Training Tips straight to your inbox</h4>
              <div className="space-y-4 max-w-md">
                <label className="text-xs text-gray-400 font-medium">Newsletter</label>
                <div className="flex items-center bg-[#1A1A1A] rounded-full p-1.5 border border-gray-800 focus-within:border-gray-600 transition-colors">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-transparent border-none outline-none px-6 py-3 w-full text-sm text-white placeholder:text-gray-600"
                  />
                  <button className="bg-[#FF4500] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm text-gray-400 pt-2">
              <div className="flex flex-col gap-5">
                <a href="#" className="hover:text-white transition-colors">Training</a>
                <a href="#" className="hover:text-white transition-colors">Programs</a>
                <a href="#" className="hover:text-white transition-colors">Plans & Pricing</a>
                <a href="#" className="hover:text-white transition-colors">Community</a>
              </div>
              <div className="flex flex-col gap-5">
                <a href="#" className="hover:text-white transition-colors">About Us</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
                <a href="#" className="hover:text-white transition-colors">Cookies & Privacy</a>
              </div>
              <div className="flex flex-col gap-5">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">Tiktok</a>
                <a href="#" className="hover:text-white transition-colors">Youtube</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-16 border-t border-gray-800 pt-8">
            <span>2025 VISION SPORT</span>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
              <a href="#" className="hover:text-white transition-colors">TERM OF SERVICE</a>
            </div>
          </div>

          <div className="overflow-hidden flex justify-center opacity-10 select-none pointer-events-none">
            <h2 className="text-[28vw] font-bold leading-[0.75] tracking-tighter text-white">
              NGRC
            </h2>
          </div>
        </div>
      </footer>
    </div>
  );
}
