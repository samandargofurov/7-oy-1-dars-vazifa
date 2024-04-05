import icon1 from './assets/icon-1.svg'
import icon2 from './assets/icon-2.svg'
import icon3 from './assets/icon-3.svg'
import line from './assets/Line.png'
import frame from './assets/Frame.png'

function App() {

  document.body.style.backgroundColor = "#101017"
  document.body.style.color = "#fff"

  return (
    <>
      <div className="container mx-auto px-20">
        {/* header */}
        <div className="header py-5 flex items-center justify-between">
          <div className="logo font-bold text-3xl"><a href="">Alifreza</a><span className='text-lime-500 font-bold'>.</span></div>
          <div className='flex items-center gap-20'>
            <ul className='flex items-center gap-10'>
              <li className='font-bold transition duration-300 hover:text-green-500'><a href="#">Home</a></li>
              <li className='font-bold transition duration-300 hover:text-green-500'><a href="#">Services</a></li>
              <li className='font-bold transition duration-300 hover:text-green-500'><a href="#">Work</a></li>
              <li className='font-bold transition duration-300 hover:text-green-500'><a href="#">About us</a></li>
              <li className='font-bold transition duration-300 hover:text-green-500'><a href="#">Blog</a></li>
            </ul>
            <button className='border-2 px-3 py-1 border-green-500 font-bold transition duration-300 hover:bg-green-600'>Contact</button>
          </div>
        </div>

        {/* HERO */}

        <div className="hero mt-24">
          <div className="title text-green-500 text-4xl font-bold mb-5">Hello, I’m Alif Reza</div>
          <div className="job text-7xl font-bold">Product Designer|</div>
          <p className="desc text-sm w-2/5 mt-7 opacity-50">I’m from Singapore and I have been working as a Product Designer for more than 7 years. I’ve worked for a Hanziree company Pabloo as a Product Designer and Front-end Developer for 3 years.</p>
          <div className="click flex gap-10 mt-10">
            <button className='bg-green-600 px-3 py-2 transition duration-300 hover:border-2 hover:border-green-600 hover:bg-transparent'>Email Me</button>
            <button className='font-bold text-base opacity-50 transition duration-200 hover:text-green-600 flex items-center gap-4 transition duration-500 hover:border-2 hover:px-3'><img src={frame} alt="" /> Download CV </button>
          </div>
        </div>

        {/* services */}

        <div className="services mt-28 mb-20">
          <div className="flex justify-between items-center">
            <div className="font-bold text-5xl w-2/4">7+ years experience working</div>
            <div className="flex gap-3 flex-col">
              <div className="text-green-500 flex gap-4 items-center"><img src={line} alt="" /> Services</div>
              <div className="opacity-50 text-sm w-80">Discover the best services I offer, designed to ensure the success of your project.</div>
            </div>
          </div>
        </div>

        {/* services details */}

        <div className='flex justify-between'>
            
            <div className='mb-10'>
              <div className="w-80 h-80 bg-zinc-800 px-8 py-5">
                <img className='mt-7' src={icon1} alt="" />
                <div className="flex flex-col gap-5 mt-10">
                  <div className="font-bold text-2xl">Product design</div>
                  <div className="opacity-50 text-sm w-64">I offer innovative and attention-grabbing product design services. From initial ideation to implementation.</div>
                </div>
              </div>
              <div className='w-80 h-1.5 bg-green-600'></div>
            </div>

            <div className='mb-10'>
              <div className="w-80 h-80 bg-zinc-800 px-8 py-5">
                <img className='mt-7' src={icon2} alt="" />
                <div className="flex flex-col gap-5 mt-10">
                  <div className="font-bold text-2xl">Frontend develop</div>
                  <div className="opacity-50 text-sm w-64">Specialize in responsive and interactive front-end development. With a deep understanding of HTML, CSS, and JS.</div>
                </div>
              </div>
              <div className='w-80 h-1.5 bg-green-600'></div>
            </div>

            <div className='mb-10'>
              <div className="w-80 h-80 bg-zinc-800 px-8 py-5">
                <img className='mt-7' src={icon3} alt="" />
                <div className="flex flex-col gap-5 mt-10">
                  <div className="font-bold text-2xl">Brand strategy</div>
                  <div className="opacity-50 text-sm w-64">I help design strong and captivating brand strategies. Through thorough research and market analysis.</div>
                </div>
              </div>
              <div className='w-80 h-1.5 bg-green-600'></div>
            </div>
        </div>

      </div>
    </>
  )
}

export default App
