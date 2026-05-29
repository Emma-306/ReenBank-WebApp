import { assets } from '../assets/assets'

export const NavBar = () => {
  return (
    <div className='w-full flex items-center justify-between mb-20 relative'>
        <div className='flex flex-row items-center gap-12 xl:gap-28'>
          <img src={assets.logo} alt='logo' className='w-44 h-10 sm:w-64 sm:h-16'/>
          <nav className='flex flex-row items-center text-lg gap-6 xl:gap-12'>
            <a href="about" className='hover:scale-110 transition-all duration-300 hover:underline underline-offset-8 hover:text-green-900'>About</a>
            <a href="contact-us" className='hover:scale-110 transition-all duration-300 hover:underline underline-offset-8 hover:text-green-900 whitespace-nowrap'>Contact Us</a>
          </nav>
        </div>
        <button className='border-3 border-green-600/50 px-6 sm:px-8 py-3 rounded-md font-semibold text-green-600/50 hover:bg-green-800/80 hover:text-white transition-all duration-300 cursor-pointer max-sm:absolute right-0 top-10'>Login</button>
    </div>
  )
}
