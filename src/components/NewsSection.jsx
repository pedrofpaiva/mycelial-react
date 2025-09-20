const NewsCard = ({ image, title, description, location, tags = [] }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg">
    <div className="flex flex-col md:flex-row h-[270px]">
      <div className="w-full md:w-1/3 h-[270px] md:h-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col p-4 md:w-2/3">
        <div>
          <a href="#"><h2 className="text-lg font-bold mb-2 text-[rgb(51,51,51)]">{title}</h2></a>
          <p className="text-sm text-gray-600 mb-1">{description}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
        <div className="flex flex-col gap-3 mt-auto pt-3">
          <div className="flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <span key={index} className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                {tag}
              </span>
            ))}
          </div>
          <button className="rounded-button inline-flex items-center justify-start whitespace-nowrap transition-all duration-200 ease-in-out hover:translate-x-1 focus-visible:outline-none text-blue-600 gap-2 bg-transparent p-0 text-sm" title="View event">
            View event
            <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
)

export const NewsSection = () => (
  <section id="news" className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 bg-[#F2F2F2]">
    <div className="container">
      <div className="flex flex-col max-w-[724px] ml-[5%]">
        <div className="mb-12">
          <h1 className="text-[#294C60] text-5xl font-bold">News And Events</h1>
        </div>
        <div className="flex flex-col gap-6">
          <NewsCard
            image="assets/lab-1.png"
            title="Mushroom Cultivation Workshop"
            description="Join us for an interactive session on mushroom cultivation techniques."
            location="Online"
            tags={['Workshop', 'Online', 'Cultivation']}
          />
          <NewsCard
            image="assets/lab-2.png"
            title="Psychedelic Research Seminar"
            description="Explore the latest findings in psychedelic-assisted therapy and its benefits."
            location="St. Thomas"
            tags={['Workshop', 'Online', 'Cultivation']}
          />
          <NewsCard
            image="assets/lab-3.png"
            title="Community Outreach Program"
            description="Learn about our initiatives to make mental health treatments more accessible."
            location="St. Thomas"
            tags={['Workshop', 'Online', 'Cultivation']}
          />
        </div>
      </div>
    </div>
  </section>
)

export default NewsSection
