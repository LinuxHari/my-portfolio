import { SKILLS } from '../data'

const Skills = () => {
  return (
    <section className='text-white px-5 md:px-10 py-20' id='skills'>
      <h2 className='text-2xl sm:text-3xl text-center lg:text-left'>I&apos;m currently looking to join a <span className='text-[#804ab6] whitespace-nowrap'>cross-functional</span> team</h2>
      <p className='text-center mt-2'>That values improving people&apos;s lives engineering excellence </p>
        <div className='relative py-10 md:py-80'>
        <img src="./logo.png" alt="Logo" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48' />
        <div className='absolute top-1/4 left-1/2 -translate-x-1/2 h-96 w-96 bg-[#9625ff] rounded-full blur-[80px] -z-10'>
        </div>
       {
        SKILLS.map(({name, icon, description, className, isRounded}) => (
          <div key={name} className={`px-4 py-2 shadow-2xl flex gap-x-2 items-center hover:md:bg-black/15 hover:border-white/25 hover:shadow-inner cursor-default backdrop-blur-md border border-white/10 w-full mt-4 md:mt-0 md:w-80 md:absolute rounded-xl ${className}`}>
            <img src={icon} alt="" className={`h-10 w-10 ${!isRounded?"bg-gray-800 rounded-full p-1.5 object-contain": ""}`} />
            <div className='space-y-1'>
            <h3 className='font-sans font-semibold'>{name}</h3>
            <p className='text-xs'>{description}</p>
            </div>
          </div>
        ))
       }
        </div>
    </section>
  )
}

export default Skills