import { SedansIcon, SuvsIcon, LuxuryIcon } from './Icons'

function App() {
  return (
    <main className='relative grid min-h-screen place-content-center py-16'>
      <div className='grid max-w-[316px] grid-cols-1 overflow-hidden rounded-lg desktop:max-w-4xl desktop:grid-cols-3'>
        <div className='flex flex-col items-start gap-6 bg-_bright-orange p-12 desktop:gap-8'>
          <SedansIcon />
          <h2 className='font-cursive text-4xl uppercase'>Sedans</h2>
          <p className='text-sm leading-6 tracking-wider desktop:leading-7'>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          <button className='rounded-full border-2 border-transparent bg-_very-light-gray px-8 py-3 text-sm tracking-wider text-_bright-orange transition hover:border-_very-light-gray hover:bg-_bright-orange hover:text-_very-light-gray desktop:mt-12'>
            Learn More
          </button>
        </div>
        <div className='flex flex-col items-start gap-6 bg-_dark-cyan p-12 desktop:gap-8'>
          <SuvsIcon />
          <h2 className='font-cursive text-4xl uppercase'>SUVs</h2>
          <p className='text-sm leading-6 tracking-wider desktop:leading-7'>
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <button className='rounded-full border-2 border-transparent bg-_very-light-gray px-8 py-3 text-sm tracking-wider text-_dark-cyan transition hover:border-_very-light-gray hover:bg-_dark-cyan hover:text-_very-light-gray desktop:mt-12'>
            Learn More
          </button>
        </div>
        <div className='flex flex-col items-start gap-6 bg-_very-dark-cyan p-12 desktop:gap-8'>
          <LuxuryIcon />
          <h2 className='font-cursive text-4xl uppercase'>Luxury</h2>
          <p className='text-sm leading-6 tracking-wider desktop:leading-7'>
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <button className='rounded-full border-2 border-transparent bg-_very-light-gray px-8 py-3 text-sm tracking-wider text-_very-dark-cyan transition hover:border-_very-light-gray hover:bg-_very-dark-cyan hover:text-_very-light-gray desktop:mt-12'>
            Learn More
          </button>
        </div>
      </div>
      <Attribution />
    </main>
  )
}

const Attribution = () => {
  return (
    <div className='absolute bottom-4 w-full text-center text-xs text-neutral-400'>
      Challenge by{' '}
      <a
        href='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
        className='text-blue-500'
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        href='https://www.frontendmentor.io/profile/orphandeity'
        className='text-blue-500'
      >
        Jeff R Williams
      </a>
      .
    </div>
  )
}

export default App
