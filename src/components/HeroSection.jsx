const Navigation = () => (
  <div className="absolute top-8 right-12 z-20">
    <a href="#team" className="nav-link text-white text-lg font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">About Us</a>
  </div>
)

export const HeroSection = () => (
  <section className="min-h-screen relative flex items-center overflow-hidden" id="home">
    <Navigation />
    <img src="assets/hero-3.png" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
    
    <div className="relative z-10 container ml-[5%] max-w-[724px]">
      <img src="assets/logo-white.png" alt="Mycelial Health Logo" className="h-24 w-auto mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]" />
      <h1 className="text-2xl font-bold mb-4 tracking-[-2px] leading-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">Flourishing People</h1>
      <p className="text-lg opacity-90 max-w-2xl text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
        Mycelial Health is dedicated to the natural cultivation, research and development of psilocybin and related species of mushroom. With the goal of supporting their use in effective treatment of mental and public health issues in the USVI and beyond.
      </p>
    </div>
  </section>
)

export default HeroSection
