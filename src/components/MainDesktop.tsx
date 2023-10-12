
import MK from '@/assets/mk.svg'
import Image from 'next/image'

export function MainDesktop() {
    return(
        <main className=' flex flex-1  justify-center   w-[772px] h-[704px] text-headline font-bold leading-normal max-md:hidden px-[45px]'>
          <div className='flex flex-1 flex-col items-center justify-center text-start w-[745px]'>
          <h1 className=''><Image src={MK} alt='Meku expo' className='w-[772px] h-162px'/></h1>
          <h2 className='text-4xl'>2024 Japan</h2>
          <p className='p-3 my-5 text-lg text-justify text-paragraph '>“MIKU EXPO” is the virtual singer Hatsune Miku’s world tour series which will celebrate its 10th anniversary in 2024. In the 10 years since the first concert, “MIKU EXPO” has traveled to 30 cities worldwide, performing 68 shows in front of over 190,000 attendees, and gathered over 60,000 viewers for the MIKU EXPO 2021 Online livestream.</p>

          <button className=' rounded-[10px] bg-primary flex w-[148px] h-[60px] p-8 items-center justify-center gap-2 my-2' >
            <span className='text-2xl'>TICKETS</span>
          </button>
          </div>
        </main>
    )
}