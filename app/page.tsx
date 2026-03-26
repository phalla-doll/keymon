"use client";

import Image from "next/image";
import { Menu, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeSwitch, setActiveSwitch] = useState(2);

  const tags = ['MECHANICAL SWITCHES', 'PBT KEYCAPS', 'HOT-SWAPPABLE', 'RGB LIGHTING'];
  const marqueeItems = [...tags, ...tags, ...tags, ...tags]; // Duplicate for seamless loop

  const switches = [
    { num: '01', name: 'Cherry Mix', img: 'https://picsum.photos/seed/switch-cherry/400/300' },
    { num: '02', name: 'Kailh/Kaihua', img: 'https://picsum.photos/seed/switch-kailh/400/300' },
    { num: '03', name: 'Oetemu', img: 'https://picsum.photos/seed/switch-oetemu/400/300' },
    { num: '04', name: 'Romer G', img: 'https://picsum.photos/seed/switch-romer/400/300' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-neutral-950 font-sans selection:bg-[#FF4500] selection:text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-8 px-6 md:px-12 relative z-50 max-w-[100rem] mx-auto">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 bg-[#FF4500] rounded-xl grid grid-cols-2 gap-1 p-2 transition-transform group-hover:scale-105">
             <div className="bg-white rounded-full"></div>
             <div className="bg-white rounded-full"></div>
             <div className="bg-white rounded-full"></div>
             <div className="bg-white rounded-full"></div>
          </div>
          <span className="font-bold text-2xl tracking-tight">Keymon</span>
        </div>
        <button className="w-12 h-12 bg-neutral-950 text-white rounded-full flex items-center justify-center hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-lg">
          <Menu size={20} />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-8 pb-32 px-6 md:px-12 max-w-[100rem] mx-auto">
        <div className="flex justify-end mb-12 relative z-10">
          <div className="max-w-md">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight mb-6 text-balance">
              Mechanical<br />Keyboards
            </h1>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-sm">
              We design and create premium mechanical keyboards that combine aesthetics, durability, and high performance for every typing experience.
            </p>
          </div>
        </div>

        {/* Huge Background Text */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden flex flex-col justify-center pointer-events-none z-0 select-none opacity-5 md:opacity-100">
          <h2 className="text-[32vw] font-bold leading-[0.75] tracking-tighter text-neutral-100 -ml-[2vw]">
            Ke<br/>ybo
          </h2>
        </div>

        {/* Hero Image */}
        <div className="relative z-10 mt-16 w-full max-w-7xl mx-auto h-[400px] md:h-[600px] lg:h-[700px] group">
          <Image
            src="https://picsum.photos/seed/keyboard-hero/1600/900"
            alt="Typing on mechanical keyboard"
            fill
            className="object-cover rounded-[2rem] md:rounded-[3rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]"
            priority
          />
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 md:bottom-12 md:left-12 w-12 h-12 bg-[#FF4500] rounded-full shadow-xl"></div>
          <div className="absolute -bottom-12 left-1/2 w-10 h-10 bg-teal-200 rounded-full shadow-xl"></div>
          <div className="absolute bottom-16 -right-4 md:right-24 w-20 h-12 bg-yellow-100 rounded-lg shadow-xl -rotate-6"></div>
        </div>
      </section>

      {/* Tags Marquee */}
      <section className="py-6 border-y border-neutral-100 overflow-hidden bg-white relative z-10">
        <div className="flex w-max animate-marquee items-center">
          {marqueeItems.map((tag, i) => (
            <div key={i} className="flex items-center gap-4 text-[11px] font-bold tracking-[0.25em] uppercase whitespace-nowrap px-8 text-neutral-800">
              <div className="w-1.5 h-1.5 bg-[#FF4500] rotate-45"></div>
              {tag} <ArrowRight size={12} className="text-neutral-400" />
            </div>
          ))}
        </div>
      </section>

      {/* Huge KEYBOARD Text */}
      <section className="py-24 md:py-32 overflow-hidden flex justify-center px-4 bg-white relative z-10">
        <h2 className="text-[15vw] font-bold leading-none tracking-tighter text-neutral-950 flex items-center justify-center w-full">
          KEY
          <span className="relative inline-block w-[12vw] h-[8vw] mx-[1vw] -translate-y-[1vw] rounded-lg md:rounded-2xl overflow-hidden shadow-xl">
            <Image src="https://picsum.photos/seed/keycap-small/400/300" alt="keycap" fill className="object-cover" />
          </span>
          BOARD
          <span className="text-[#FF4500] relative -left-[1vw] mix-blend-multiply">.</span>
        </h2>
      </section>

      {/* Intro Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-[100rem] mx-auto items-center">
        <div>
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight mb-16 text-balance">
            Work Smarter, Not<br />Harder. Seamless Typing.
          </h3>
          <div className="flex gap-8">
            <div className="flex flex-col gap-4 group cursor-pointer">
              <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-3xl overflow-hidden shadow-lg transition-transform duration-500 group-hover:-translate-y-2">
                <Image src="https://picsum.photos/seed/kb-detail1/400/400" alt="Keyboard detail" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <p className="text-xs font-mono text-neutral-500 italic font-medium">// Produce everyday</p>
            </div>
            <div className="flex flex-col gap-4 group cursor-pointer">
              <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-3xl overflow-hidden shadow-lg transition-transform duration-500 group-hover:-translate-y-2">
                <Image src="https://picsum.photos/seed/kb-detail2/400/400" alt="Keyboard detail" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 right-4 w-4 h-4 bg-white rounded-full shadow-md"></div>
              </div>
              <p className="text-xs font-mono text-neutral-500 italic font-medium">// Affordable</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center lg:pl-12">
          <p className="text-2xl md:text-3xl leading-relaxed text-neutral-950 font-medium text-balance">
            Say goodbye to mushy membrane keys and scattered focus. Our intuitive mechanical keyboards help <span className="text-neutral-400">enthusiasts—from gamers to developers—achieve flow state effortlessly. With customizable switches, premium materials, and satisfying acoustics.</span>
          </p>
          <div className="flex flex-wrap items-center gap-8 mt-16">
            <button className="bg-neutral-950 text-white px-8 py-4 rounded-full flex items-center gap-3 text-sm font-medium hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-lg">
              Learn more <ArrowRight size={16} />
            </button>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-2 border-white relative overflow-hidden shadow-md"><Image src="https://picsum.photos/seed/user1/100/100" fill alt="User" className="object-cover" /></div>
                <div className="w-12 h-12 rounded-full border-2 border-white relative overflow-hidden shadow-md"><Image src="https://picsum.photos/seed/user2/100/100" fill alt="User" className="object-cover" /></div>
                <div className="w-12 h-12 rounded-full border-2 border-white relative overflow-hidden shadow-md"><Image src="https://picsum.photos/seed/user3/100/100" fill alt="User" className="object-cover" /></div>
              </div>
              <span className="text-xs text-neutral-500 max-w-[100px] leading-snug font-medium">get to know us better</span>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-24 px-4 md:px-8 lg:px-12 max-w-[100rem] mx-auto">
        <div className="relative w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden p-4 md:p-8 lg:p-16 min-h-[800px] flex items-center justify-center shadow-2xl">
          {/* Background Image */}
          <Image src="https://picsum.photos/seed/kb-bg-acc/1920/1080" alt="Background" fill className="object-cover" />
          
          {/* Foreground Card */}
          <div className="relative z-10 bg-white/90 backdrop-blur-2xl w-full max-w-6xl rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-2xl border border-white/50">
            <div className="flex flex-col items-center text-center mb-16 md:mb-24">
              <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.25em] uppercase mb-8 text-neutral-800">
                Accessories <div className="w-2 h-2 bg-[#FF4500] rounded-full"></div>
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 text-balance">Customizable Accessories & Support</h3>
              <p className="text-neutral-500 text-base max-w-xl leading-relaxed">Several additional accessories and supports that can be modified according to the needs of the keyboard user.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-xl group">
                <Image src="https://picsum.photos/seed/kb-acc-detail/800/1000" alt="Accessories" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-col gap-12 md:gap-16">
                <div className="flex items-start justify-between gap-8">
                  <div>
                    <h4 className="text-3xl font-medium mb-4 tracking-tight">Built for everyday performance</h4>
                    <p className="text-base text-neutral-500 max-w-md leading-relaxed">Rather than pushing unnecessary features, we design keyboards that support your daily tasks with precision, comfort, and reliability.</p>
                  </div>
                  <button className="w-12 h-12 bg-[#FF4500] text-white rounded-full flex items-center justify-center shrink-0 hover:bg-orange-600 transition-all hover:scale-105 active:scale-95 shadow-lg">
                    <ArrowRight size={20} />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                  {[
                    { title: 'Mechanical', desc: 'Choose our collection mechanical keyboard' },
                    { title: 'Keycaps', desc: 'Choose our collection mechanical keyboard' },
                    { title: 'Switch', desc: 'Choose our collection mechanical keyboard' },
                  ].map((item, i) => (
                    <div key={i} className="bg-neutral-50 p-6 rounded-3xl flex flex-col justify-between aspect-auto sm:aspect-square hover:bg-neutral-100 transition-colors cursor-pointer border border-neutral-100 shadow-sm hover:shadow-md">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                        <div className="w-2.5 h-2.5 bg-neutral-950 rounded-full"></div>
                      </div>
                      <div>
                        <h5 className="font-medium text-base mb-2">{item.title}</h5>
                        <p className="text-[11px] text-neutral-500 leading-relaxed">{item.desc}</p>
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
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.25em] uppercase mb-12 text-neutral-800">
          Switch <div className="w-2 h-2 bg-[#FF4500] rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-balance">
            Work Smarter, Not<br />Harder For Seamless
          </h3>
          <div className="flex lg:justify-end pb-4">
            <p className="text-base text-neutral-500 max-w-md leading-relaxed">
              The component located beneath each key on a mechanical keyboard. This switch is a crucial part that determines how the keyboard will feel and sound when used.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2" onMouseLeave={() => setActiveSwitch(2)}>
          {switches.map((switchItem, i) => {
            const isActive = activeSwitch === i;
            return (
              <div 
                key={i} 
                onMouseEnter={() => setActiveSwitch(i)}
                onClick={() => setActiveSwitch(i)}
                className={`group flex flex-col md:flex-row md:items-center justify-between py-8 md:py-10 transition-all duration-500 ease-out cursor-pointer ${isActive ? 'bg-neutral-950 text-white px-6 md:px-12 -mx-6 md:-mx-12 rounded-[2rem] shadow-2xl my-4' : 'hover:bg-neutral-50 px-6 md:px-12 -mx-6 md:-mx-12 rounded-[2rem] border-b border-neutral-200'}`}
              >
                <div className="flex items-center gap-8 md:gap-16 mb-6 md:mb-0">
                  <span className={`text-sm font-mono font-medium transition-colors duration-500 ${isActive ? 'text-neutral-400' : 'text-neutral-400'}`}>{switchItem.num}</span>
                  <h4 className={`text-4xl md:text-5xl font-medium tracking-tight transition-transform duration-500 ease-out ${isActive ? 'translate-x-2 md:translate-x-4' : 'translate-x-0'}`}>{switchItem.name}</h4>
                </div>
                
                <div className="flex items-center justify-between md:justify-end gap-8 w-full md:w-auto">
                  {/* Image wrapper with smooth expand/collapse */}
                  <div className={`relative overflow-hidden transition-all duration-500 ease-out rounded-2xl shadow-lg ${isActive ? 'w-32 h-20 md:w-56 md:h-32 opacity-100 scale-100' : 'w-0 h-20 md:h-32 opacity-0 scale-95'}`}>
                    <Image src={switchItem.img} alt={switchItem.name} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                  </div>
                  <button className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-500 ease-out shrink-0 ${isActive ? 'border-neutral-700 text-white hover:bg-white hover:text-neutral-950 -rotate-45' : 'border-neutral-300 text-neutral-950 hover:bg-neutral-950 hover:text-white rotate-0'}`}>
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-32 flex justify-end overflow-hidden">
          <h2 className="text-[12vw] font-light tracking-tighter leading-none text-neutral-950 -mr-[2vw]">
            -OPTIONS
          </h2>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#F8F8F8] rounded-[2rem] md:rounded-[3rem] mx-4 md:mx-8 mb-12 max-w-[100rem] xl:mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-balance">
            Elevate Your<br />Keyboard Experience
          </h3>
          <div className="flex lg:justify-end pt-6">
            <p className="text-base text-neutral-500 max-w-md leading-relaxed">
              The keycaps are designed with a classic Cherry profile, engineered for the best typing experience. They won't tire you out even after hours of work or gaming.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-16">
          <div className="xl:col-span-3 flex flex-col justify-between order-2 xl:order-1">
            <div className="mb-12 xl:mb-0">
              <h4 className="text-3xl font-medium mb-6 tracking-tight">Artisan Keycaps</h4>
              <p className="text-base text-neutral-500 leading-relaxed">
                We offer decorative keycaps and premium surface materials that balance aesthetics, consistency, and durability — perfect for gaming, productivity, and collectible setups.
              </p>
            </div>
            <button className="bg-neutral-950 text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 text-sm font-medium hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-lg w-fit">
              Shop Now <ArrowRight size={16} />
            </button>
          </div>
          
          <div className="xl:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8 order-1 xl:order-2">
            <div className="relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-md group">
              <Image src="https://picsum.photos/seed/kb-exp-left/800/1000" alt="Keyboard experience" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-md group">
              <Image src="https://picsum.photos/seed/kb-exp-right/800/1000" alt="Keyboard experience" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[85%] md:right-auto md:bottom-auto bg-white/90 backdrop-blur-2xl rounded-2xl p-5 flex gap-6 items-center shadow-2xl border border-white/50">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 shadow-sm">
                  <Image src="https://picsum.photos/seed/kb-sakura/200/200" alt="Sakura Pink" fill className="object-cover" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-neutral-500 font-medium mb-1 block">01</span>
                  <h5 className="font-medium text-base mb-1.5">PBT Sakura Pink Series</h5>
                  <p className="text-xs text-neutral-500 leading-relaxed">Sakura-themed double-shot PBT keycaps — durable, anti-shine, suitable for 60% to full-size keyboards.</p>
                </div>
              </div>
              
              <button className="absolute top-6 right-6 md:top-auto md:bottom-8 md:right-8 w-14 h-14 bg-white text-neutral-950 rounded-full flex items-center justify-center shadow-2xl hover:bg-neutral-100 hover:scale-105 active:scale-95 transition-all">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] text-white pt-32 pb-12 px-6 md:px-12 rounded-t-[2rem] md:rounded-t-[3rem] mx-2 md:mx-4 mt-4">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 mb-32">
            <div className="lg:col-span-5">
              <h4 className="text-3xl md:text-4xl font-medium mb-12 max-w-md leading-snug tracking-tight text-balance">Subscribe to our newsletter and get your daily boost of Training Tips straight to your inbox</h4>
              <div className="space-y-5 max-w-md">
                <label className="text-sm text-neutral-400 font-medium">Newsletter</label>
                <div className="flex items-center bg-[#1A1A1A] rounded-full p-2 border border-neutral-800 focus-within:border-neutral-600 transition-colors shadow-inner">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-transparent border-none outline-none px-6 py-4 w-full text-base text-white placeholder:text-neutral-600"
                  />
                  <button className="bg-[#FF4500] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors whitespace-nowrap shadow-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 text-base text-neutral-400 pt-2">
              <div className="flex flex-col gap-6">
                <a href="#" className="hover:text-white transition-colors">Training</a>
                <a href="#" className="hover:text-white transition-colors">Programs</a>
                <a href="#" className="hover:text-white transition-colors">Plans & Pricing</a>
                <a href="#" className="hover:text-white transition-colors">Community</a>
              </div>
              <div className="flex flex-col gap-6">
                <a href="#" className="hover:text-white transition-colors">About Us</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
                <a href="#" className="hover:text-white transition-colors">Cookies & Privacy</a>
              </div>
              <div className="flex flex-col gap-6">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">Tiktok</a>
                <a href="#" className="hover:text-white transition-colors">Youtube</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-500 mb-20 border-t border-neutral-800/50 pt-12">
            <span>2025 VISION SPORT</span>
            <div className="flex gap-12">
              <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
              <a href="#" className="hover:text-white transition-colors">TERM OF SERVICE</a>
            </div>
          </div>

          <div className="overflow-hidden flex justify-center opacity-[0.03] select-none pointer-events-none">
            <h2 className="text-[32vw] font-bold leading-[0.75] tracking-tighter text-white">
              NGRC
            </h2>
          </div>
        </div>
      </footer>
    </div>
  );
}
