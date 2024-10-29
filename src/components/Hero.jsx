import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0
        top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            {/*Purple circle*/}
            <div className='w-5 h-5 rounded-full bg-[#35fce1]' />
            {/*Purple Line*/}
            <div className='w-1 sm:h-80 h-40 violet-gradient' style={{ background: 'linear-gradient(180deg, #05ffd5, transparent)' }}  />
          </div>

          <div>
            {/*Name*/}
            <h1 className={`${styles.heroHeadText} 
              text-white`}>Hi, I'm <span className='text-[#05ffd5]'>Andrey Mena</span>
            </h1>
            {/*Description*/}
            <p className={`${styles.heroSubText} mt-2 text-[#05ffd5]`}>
            I am a recent software engineering graduate, with experience in mobile, web and application software development.
            <br 
              className='sm:block hidden' />I consider myself a positive person, with a desire to work and continue learning.
            <br />
            <br />
            <br />
            *Portfolio in development
            </p>
          </div>

          {/*TODO: Put photo here*/}

      </div>
      {/*TODO: Put 3D object here
      <ComputersCanvas />
      */}


      {/*Go down object*/}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero