import { useEffect } from 'react'
import Lenis from 'lenis'
import { motion } from 'framer-motion'
import heroBackground from './assets/hero-3.png'
import logoWhite from './assets/logo-white.png'
import eventImage from './assets/event-1.png'
// Team member images
import holmesImage from './assets/team/Headshot Holmes Final.jpeg'
import mitchellImage from './assets/team/Headshot H Mitchell.jpeg'
import hendricksImage from './assets/team/Headshot P Hendricks.jpeg'
import westImage from './assets/team/Headshot D West.jpeg'
import clendrinenImage from './assets/team/Headshot_Cletis.jpeg'
import dentingerImage from './assets/team/Headshot B Dentinger.jpeg'
import danielleImage from './assets/team/Danielle_2022_929.jpg'

function App() {
  useEffect(() => {
    const lenis = new Lenis()
    
    const parallaxEffect = () => {
      const scrolled = window.scrollY
      const heroBackground = document.querySelector('.hero-background')
      const heroContent = document.querySelector('.hero-content')
      
      if (heroBackground && heroContent) {
        heroBackground.style.transform = `translateY(${scrolled * 0.15}px) scale(1.1)`
        heroContent.style.transform = `translateY(${scrolled * 0.1}px)`
      }
    }

    function raf(time) {
      lenis.raf(time)
      parallaxEffect()
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const yearSpan = document.getElementById('currentYear')
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear()
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center overflow-hidden" id="home">
        {/* Navigation */}
        <motion.nav 
          className="absolute top-0 left-0 right-0 z-20 px-[5%] py-6 flex justify-between items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2.3,
            ease: "easeOut",
            delay: 0.9
          }}
        >
          <img src={logoWhite} alt="Mycelial Health Logo" className="h-24 w-auto drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]" />
          <a href="#team" className="nav-link text-white text-lg font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] no-underline">About Us</a>
        </motion.nav>

        {/* Background Image with Parallax and Fade */}
        <motion.div 
          className="absolute inset-0 w-full h-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2.3,
            ease: "easeOut"
          }}
        >
          <img 
            src={heroBackground} 
            alt="Hero Background" 
            className="hero-background absolute inset-0 w-full h-[120%] -top-[10%] object-cover origin-top will-change-transform"
          />
        </motion.div>
        
        {/* Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2.3,
            ease: "easeOut",
            delay: 0.3
          }}
        />
        
        {/* Content with Parallax and Fade */}
        <motion.div 
          className="hero-content relative z-10 container mx-auto px-[5%] mt-24 will-change-transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2.3,
            ease: "easeOut",
            delay: 0.6
          }}
        >
          <div className="max-w-[800px]">
            <h1 className="text-[72px] font-bold mb-8 leading-none tracking-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
              Flourishing People
            </h1>
            <p className="text-xl leading-relaxed opacity-90 max-w-2xl text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
              Mycelial Health is dedicated to the natural cultivation, research and development of psilocybin and related species of mushroom. With the goal of supporting their use in effective treatment of mental and public health issues in the USVI and beyond.
            </p>
          </div>
        </motion.div>
      </section>

      {/* News and Events Section */}
      <section id="news" className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 bg-[#F2F2F2]">
        <div className="container">
          <div className="flex flex-col max-w-[724px] ml-[5%]">
            <div className="mb-12">
              <h1 className="text-[#294C60] text-5xl font-bold">News And Events</h1>
            </div>
            <div className="flex flex-col gap-6">
              {[
                {
                  image: eventImage,
                  title: 'Mushroom Cultivation Workshop',
                  description: 'Mycelial Health is holding a conference in the U.S. Virgin Islands, from February 5-7, 2026, to learn about our latest projects in cultivating medicinal mushrooms and advancing innovative mental health treatments. This is an invitation only event, but contact us if you are interested in participating.',
                  accommodation: 'For accommodations, guests can stay at The Hideaway at Hull Bay. If you would like to extend your stay, please contactat 888-336-1586.',
                  hotelUrl: 'https://hideawayhullbay.com/'
                  
                }
              ].map((event, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="flex flex-col md:flex-row h-[270px]">
                    <div className="w-full md:w-1/3 h-[270px] md:h-full">
                      <img src={event.image} alt={`Lab Image ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col p-4 md:w-2/3">
                      <div>
                        <a href="#"><h2 className="text-lg font-bold mb-2 text-[rgb(51,51,51)]">{event.title}</h2></a>
                        <p className="text-sm text-gray-600 mb-1">{event.description}</p>
                        <p className="text-sm text-gray-600 mb-1">
                          For accommodations, guests can stay at{' '}
                          <a 
                            href={event.hotelUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[#294C60] hover:opacity-80 transition-colors"
                          >
                            The Hideaway at Hull Bay
                          </a>
                          . If you would like to extend your stay, please contact us at 888-336-1586.
                        </p>
                      </div>
                      <div className="flex flex-col gap-3 mt-auto pt-3">
                        <div className="flex flex-wrap gap-1">
                          <span className="inline-flex items-center rounded-full bg-[#F5DFCB] px-2 py-0.5 text-xs font-medium text-black ring-1 ring-inset ring-[#E5CFB8]">Workshop</span>
                          <span className="inline-flex items-center rounded-full bg-[#F5DFCB] px-2 py-0.5 text-xs font-medium text-black ring-1 ring-inset ring-[#E5CFB8]">Online</span>
                          <span className="inline-flex items-center rounded-full bg-[#F5DFCB] px-2 py-0.5 text-xs font-medium text-black ring-1 ring-inset ring-[#E5CFB8]">Cultivation</span>
                        </div>
                        {/* <button className="rounded-button inline-flex items-center justify-start whitespace-nowrap transition-all duration-200 ease-in-out hover:translate-x-1 focus-visible:outline-none text-blue-600 gap-2 bg-transparent p-0 text-sm" title="View event">
                          View event
                          <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor"></path>
                          </svg>
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#FFFFFF]">
        <div className="container">
          <div className="mx-auto mb-12 max-w-[37rem] text-center md:mb-18 lg:mb-20">
            <h2 className="text-[#294C60] mb-5 text-[56px] font-bold">About Us</h2>
            <p className="text-[#000] md:text-md">Our mission is to promote human flourishing by supporting psychedelic - assisted mental health research, advanced mycotechnogy, (including complementary functional mushrooms) and novel, equitable treatment solutions.</p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {[
              { name: 'David Holmes', title: 'Founder, Co-CEO', image: holmesImage },
              { name: 'Haydn Mitchell', title: 'Founder, Co-CEO', image: mitchellImage },
              { name: 'Peter Hendricks, PhD', title: 'Co-Founder, Chief Scientific Officer', image: hendricksImage },
              { name: 'Deirdre West', title: 'Co-Founder, Clinical Director', image: westImage },
              { name: 'Cletis Clendinen', title: 'Community Relations', image: clendrinenImage },
              { name: 'Dr. Bryn Dentinger', title: 'Director of Research', image: dentingerImage },
              { name: 'Danielle Holmes', title: 'Program Coordinator', image: danielleImage }
            ].map((member, index) => (
              <div key={index} className="flex flex-col text-center">
                <div className="rb-5 mb-5 flex w-full items-center justify-center md:mb-6">
                  <img src={member.image} alt={member.name} className="size-24 min-h-24 min-w-24 rounded-full object-cover border-[1px] border-solid border-[#294C60]" />
                </div>
                <div className="mb-3 md:mb-4">
                  <h5 className="text-[rgb(51,51,51)] text-md font-semibold md:text-lg">{member.name}</h5>
                  <h6 className="text-[rgb(75,85,99)] text-[14px]">{member.title}</h6>
                </div>
                <div className="mt-3 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center text-[#333333]">
                  <a href="#" className="text-[#333333] hover:opacity-80 transition-colors"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="size-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path></svg></a>
                  <a href="#" className="text-[#333333] hover:opacity-80 transition-colors"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="size-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.66 6.98a9.932 9.932 0 0 0-3.641-3.64C15.486 2.447 13.813 2 12 2s-3.486.447-5.02 1.34c-1.533.893-2.747 2.107-3.64 3.64S2 10.187 2 12s.446 3.487 1.34 5.02a9.924 9.924 0 0 0 3.641 3.64C8.514 21.553 10.187 22 12 22s3.486-.447 5.02-1.34a9.932 9.932 0 0 0 3.641-3.64C21.554 15.487 22 13.813 22 12s-.446-3.487-1.34-5.02zM12 3.66c2 0 3.772.64 5.32 1.919-.92 1.174-2.286 2.14-4.1 2.9-1.002-1.813-2.088-3.327-3.261-4.54A7.715 7.715 0 0 1 12 3.66zM5.51 6.8a8.116 8.116 0 0 1 2.711-2.22c1.212 1.201 2.325 2.7 3.34 4.5-2 .6-4.114.9-6.341.9-.573 0-1.006-.013-1.3-.04A8.549 8.549 0 0 1 5.51 6.8zM3.66 12c0-.054.003-.12.01-.2.007-.08.01-.146.01-.2.254.014.641.02 1.161.02 2.666 0 5.146-.367 7.439-1.1.187.373.381.793.58 1.26-1.32.293-2.674 1.006-4.061 2.14S6.4 16.247 5.76 17.5c-1.4-1.587-2.1-3.42-2.1-5.5zM12 20.34c-1.894 0-3.594-.587-5.101-1.759.601-1.187 1.524-2.322 2.771-3.401 1.246-1.08 2.483-1.753 3.71-2.02a29.441 29.441 0 0 1 1.56 6.62 8.166 8.166 0 0 1-2.94.56zm7.08-3.96a8.351 8.351 0 0 1-2.58 2.621c-.24-2.08-.7-4.107-1.379-6.081.932-.066 1.765-.1 2.5-.1.799 0 1.686.034 2.659.1a8.098 8.098 0 0 1-1.2 3.46zm-1.24-5c-1.16 0-2.233.047-3.22.14a27.053 27.053 0 0 0-.68-1.62c2.066-.906 3.532-2.006 4.399-3.3 1.2 1.414 1.854 3.027 1.96 4.84-.812-.04-1.632-.06-2.459-.06z"></path></svg></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="px-[5%] py-8 bg-[#294C60] text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8">
            <div className="w-full md:w-auto">
              <img src={logoWhite} alt="Mycelial Health Logo" className="h-16 w-auto" />
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row gap-6 mt-8 md:mt-0 md:items-center">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8">
                <div>
                  <h3 className="text-xs font-normal mb-1 md:mb-0">On Phone</h3>
                  <p className="text-sm font-bold">307-699-9271</p>
                </div>
                <div>
                  <h3 className="text-xs font-normal mb-1 md:mb-0">Online</h3>
                  <p className="text-sm font-bold">
                    <a href="mailto:info@mycelial.health" className="hover:opacity-80 transition-colors text-inherit decoration-none">info@mycelial.health</a>
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-normal mb-1 md:mb-0">On Land</h3>
                  <p className="text-sm font-bold">43 Norre Gade, St Thomas, VI 00802</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-white/20"></div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8">
            <p className="text-xs opacity-80 order-2 md:order-1" id="copyright">© <span id="currentYear">2024</span> Mycelial Health. All rights reserved.</p>
            <div className="flex gap-6 mb-4 md:mb-0 order-1 md:order-2">
              <a href="#" className="text-[rgb(255,255,255)] hover:opacity-80 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-[rgb(255,255,255)] hover:opacity-80 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                </svg>
              </a>
            </div>
          </div>
    </div>
      </footer>
    </>
  )
}

export default App