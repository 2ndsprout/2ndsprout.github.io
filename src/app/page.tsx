'use client'


export default function Page() {

  return (
    <main className="bg-white font-pretendard flex flex-col max-w-screen-2xl mx-auto overflow-x-hidden scrollbar-hide w-full selection:bg-blueLight_color">
      <header className='flex flex-col justify-between items-center mx-auto w-full px-8 top-0 sm:h-[12vh] md:h-[12vh] lg:h-[10vh] backdrop-blur-sm md:flex-row sticky z-30 pb-[3px] selection:bg-blueLight_color fixed'>
        <div className="w-full justify-between flex md:flex-col md:justify-between">
          <a href="/">
            <span className="text-xl font-bold">2ND SPROUT</span>
          </a>
          <button className="cursor-pointer md:hidden">open</button>
        </div>
        <nav className="absolute top-[5vh] transition-all duration-300 ease-in-out md:static md:opacity-100 left-0 w-full md:w-fit  top-[-200vh] opacity-0  pointer-events-none lg:pointer-events-auto md:pointer-events-auto font-dohyeon text-gray-600 ">
          <ul className="flex flex-col gap-4 py-5 text-base text-center md:flex-row md:gap-7 md:text-lg bg-none  md:bg-transparent">
            <li><a href="" className="hover:text-blue-400">About</a></li>
            <li><a href="" className="hover:text-blue-400">Skills</a></li>
            <li><a href="" className="hover:text-blue-400">Projects</a></li>
            <li><a href="" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div>

      </div>
      <footer>

      </footer>
    </main>
  );
}