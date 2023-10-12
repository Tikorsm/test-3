import Image from 'next/image'
import { AiOutlineInstagram } from 'react-icons/ai'
import { RiTwitterXLine } from 'react-icons/ri'
import { BsFacebook } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'
import Lg from '@/assets/lg.svg'
import Ht from '@/assets/ht.svg'
export function FooterDesktop(){
    return(
        <footer className='max-md:hidden flex items-center justify-between max-h-24 px-[45px] py-3'>
           <span> <Image src={Lg} alt='Piapro'/></span>
           <ul className='flex flex-1 items-center justify-center text-white gap-6 h-full max-md:hidden'>
            <li className='text-4xl '><a href="#"><AiOutlineInstagram/></a></li>
            <li className='text-4xl'><a href="#"><RiTwitterXLine/></a></li>
            <li className='text-4xl'><a href="#"><BsFacebook/></a></li>
            <li className='text-4xl'><a href="#"><AiFillYoutube/></a></li>
           </ul>
          <span> <Image src={Ht} alt='Ht' className=''/></span>
        </footer>
    )
}