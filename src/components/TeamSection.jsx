const SocialLinks = () => (
  <>
    <a href="#"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="size-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path></svg></a>
    <a href="#"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="size-6 p-0.5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg></a>
    <a href="#"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="size-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.66 6.98a9.932 9.932 0 0 0-3.641-3.64C15.486 2.447 13.813 2 12 2s-3.486.447-5.02 1.34c-1.533.893-2.747 2.107-3.64 3.64S2 10.187 2 12s.446 3.487 1.34 5.02a9.924 9.924 0 0 0 3.641 3.64C8.514 21.553 10.187 22 12 22s3.486-.447 5.02-1.34a9.932 9.932 0 0 0 3.641-3.64C21.554 15.487 22 13.813 22 12s-.446-3.487-1.34-5.02zM12 3.66c2 0 3.772.64 5.32 1.919-.92 1.174-2.286 2.14-4.1 2.9-1.002-1.813-2.088-3.327-3.261-4.54A7.715 7.715 0 0 1 12 3.66zM5.51 6.8a8.116 8.116 0 0 1 2.711-2.22c1.212 1.201 2.325 2.7 3.34 4.5-2 .6-4.114.9-6.341.9-.573 0-1.006-.013-1.3-.04A8.549 8.549 0 0 1 5.51 6.8zM3.66 12c0-.054.003-.12.01-.2.007-.08.01-.146.01-.2.254.014.641.02 1.161.02 2.666 0 5.146-.367 7.439-1.1.187.373.381.793.58 1.26-1.32.293-2.674 1.006-4.061 2.14S6.4 16.247 5.76 17.5c-1.4-1.587-2.1-3.42-2.1-5.5zM12 20.34c-1.894 0-3.594-.587-5.101-1.759.601-1.187 1.524-2.322 2.771-3.401 1.246-1.08 2.483-1.753 3.71-2.02a29.441 29.441 0 0 1 1.56 6.62 8.166 8.166 0 0 1-2.94.56zm7.08-3.96a8.351 8.351 0 0 1-2.58 2.621c-.24-2.08-.7-4.107-1.379-6.081.932-.066 1.765-.1 2.5-.1.799 0 1.686.034 2.659.1a8.098 8.098 0 0 1-1.2 3.46zm-1.24-5c-1.16 0-2.233.047-3.22.14a27.053 27.053 0 0 0-.68-1.62c2.066-.906 3.532-2.006 4.399-3.3 1.2 1.414 1.854 3.027 1.96 4.84-.812-.04-1.632-.06-2.459-.06z"></path></svg></a>
  </>
)

const TeamMember = ({ image, name, title }) => (
  <div className="flex flex-col text-center">
    <div className="rb-5 mb-5 flex w-full items-center justify-center md:mb-6">
      <img src={image} alt={name} className="size-24 min-h-24 min-w-24 rounded-full object-cover border-[1px] border-solid border-[#294C60]" />
    </div>
    <div className="mb-3 md:mb-4">
      <h5 className="text-[rgb(51,51,51)] text-md font-semibold md:text-lg">{name}</h5>
      <h6 className="text-[rgb(75,85,99)] text-[14px]">{title}</h6>
    </div>
    <div className="mt-3 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center text-[rgb(51,51,51)]">
      <SocialLinks />
    </div>
  </div>
)

export const TeamSection = () => (
  <section id="team" className="px-[5%] py-16 md:py-24 lg:py-28">
    <div className="container">
      <div className="mx-auto mb-12 max-w-[37rem] text-center md:mb-18 lg:mb-20">
        <h2 className="text-[#294C60] mb-5 text-[56px] font-bold">About Us</h2>
        <p className="text-[rgb(51, 51, 51)] md:text-md">Our mission is to promote human flourishing by supporting psychedelic - assisted mental health research, advanced mycotechnogy, (including complementary functional mushrooms) and novel, equitable treatment solutions.</p>
      </div>
      <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
        <TeamMember
          image="assets/team/Headshot Holmes Final.jpeg"
          name="David Holmes"
          title="Founder, Co-CEO"
        />
        <TeamMember
          image="assets/team/Headshot H Mitchell.jpeg"
          name="Haydn Mitchell"
          title="Founder, Co-CEO"
        />
        <TeamMember
          image="assets/team/Headshot P Hendricks.jpeg"
          name="Peter Hendricks, PhD"
          title="Co-Founder, Chief Scientific Officer"
        />
        <TeamMember
          image="assets/team/Headshot D West.jpeg"
          name="Deirdre West"
          title="Co-Founder, Clinical Director"
        />
        <TeamMember
          image="assets/team/Headshot_Cletis.jpeg"
          name="Cletis Clendinen"
          title="Community Relations"
        />
        <TeamMember
          image="assets/team/Headshot B Dentinger.jpeg"
          name="Dr. Bryn Dentinger"
          title="Director of Research"
        />
        <TeamMember
          image="assets/team/Danielle_2022_929.jpg"
          name="Danielle Holmes"
          title="Program Coordinator"
        />
      </div>
    </div>
  </section>
)

export default TeamSection
