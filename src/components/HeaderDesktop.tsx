import MK from '@/assets/mk.svg'
import Image from 'next/image';


export function HeaderDesktop() {
    return (
        <header className='flex flex-1 items-center justify-between gap-8 p-[13px_45px_13px_45px] bg-bg_2 max-md:hidden '>

            <span>  <Image src={MK} alt='Miku expo' className='' /> </span>
            <div>
                <ul className='flex text-headline  gap-6 text-3xl leading-normal font-bold not-italic '>
                    <li><a href="#" className='hover:text-navlink_hover hover:border-b-4 border-navlink_hover'>Home</a></li>
                    <li><a href="#" className='hover:text-navlink_hover hover:border-b-4 border-navlink_hover'>Goods</a></li>
                    <li><a href="#" className='hover:text-navlink_hover hover:border-b-4 border-navlink_hover'>Event</a></li>
                    <li><a href="#" className='hover:text-navlink_hover hover:border-b-4 border-navlink_hover'>Tokyo</a></li>
                    <li><a href="#" className='hover:text-navlink_hover hover:border-b-4 border-navlink_hover'>Osaka</a></li>
                </ul>
            </div>

            <span className='text-headline text-xl font-bold leading-normal not-italic '>
              <p>JP / <span className='text-paragraph'> EN</span> </p>
            </span>
        </header>
    )
}