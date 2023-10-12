
import MK from '@/assets/mk.svg'
import Image from 'next/image'
import { MainDesktop } from './MainDesktop'

export function Main() {
    return(
       <main>
         <section className='flex flex-1 flex-col items-center justify-center text-center w-full h-[704px] text-headline font-bold leading-normal md:hidden'>
          <h1 className=''><Image src={MK} alt='Meku expo'/></h1>
          <h2 className='text-xl'>2024 Japan</h2>
          <p className='p-3 text-2xl'>To celebrate it’s 10th anniversary</p>
          <p className='p-3 text-2xl '>Miku is back to Japan!!!</p>
          <button className=' rounded-[10px] bg-primary flex w-[148px] h-[60px] p-8 items-center justify-center gap-2 my-2' >
            <span className='text-2xl'>TICKETS</span>
          </button>
        </section>
          <MainDesktop/>
       </main>
    )
}