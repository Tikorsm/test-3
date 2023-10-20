import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Main } from '@/components/Main'


export default function Home() {
  return (
   <section className=' w-full h-[884px] bg-background mx-auto max-sm:h-[844px]'>
   <div className=' max-sm:h-[844px] max-sm:bg-bg_img max-sm:bg-no-repeat  max-sm:bg-center  max-sm:bg-cover bg-bg_img bg-no-repeat bg-right bg-contain h-full'> 
    <Header/>
    <Main/>
    <Footer/>
    </div>
   </section>
   
  )
}
