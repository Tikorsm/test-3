import MK from '@/assets/mk.svg'
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';
import { HeaderDesktop } from './HeaderDesktop';

export function Header() {
    return (
        <header>
          <section  className='flex flex-1 items-center gap-8 p-[13px_95px_13px_19px] bg-bg_2 md:hidden '>
            <span className='text-headline text-4xl'>  <AiOutlineMenu /> </span>
            <span>  <Image src={MK} alt='Miku expo' className='' /> </span>
            
          </section>

            <HeaderDesktop/>
        </header>
    )
}