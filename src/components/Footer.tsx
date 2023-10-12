

import { AiOutlineInstagram } from 'react-icons/ai'
import { RiTwitterXLine } from 'react-icons/ri'
import { BsFacebook } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'
import { FooterDesktop } from './FooterDesktop'


export function Footer(){
    return(
        <footer className='md:hidden'>
           <ul className='flex flex-1 items-center justify-center text-white gap-6 h-full md:hidden'>
            <li className='text-3xl '><a href="#"><AiOutlineInstagram/></a></li>
            <li className='text-3xl'><a href="#"><RiTwitterXLine/></a></li>
            <li className='text-3xl'><a href="#"><BsFacebook/></a></li>
            <li className='text-3xl'><a href="#"><AiFillYoutube/></a></li>
           </ul>
           <FooterDesktop/>
        </footer>
    )
}