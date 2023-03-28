import {motion} from 'framer-motion'

import {styles} from '../styles'
import Computers from './canvas/Computers'
import ComputersCanvas from './canvas/ComputersCanvas'


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto mb-20'>
      <div className='{`${styles.paddingX} absolute inset-0 top-[80px] max-w-7xl mx-auto flex flex-row items-start gap-5 mr-5`}'>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/> 
        </div>
        <div className='mb-20'>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Michael</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 `}>I develope 3D visuals, user <br className='sm:block hiddend mb-10'/>interfaces and web applications</p>
        </div>
      </div>
      <ComputersCanvas/>
      <Computers/>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secodary flex justify-center items-start p-2'>
            <motion.dev
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
                
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