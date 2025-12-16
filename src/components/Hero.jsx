import { Link } from 'react-router-dom'
import RotatingHero from './RotatingHero'
import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'

const carouselImages = [hero1, hero2, hero3, hero4]
const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-24 items-center'>
        <div>
            <h1  className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>Explore Your Universe!</h1>
            <p className='mt-8 max-w-xl text-lg leading-8'>APOD offers a daily visual feast of our universe, bringing the latest discoveries, breathtaking imagery, and educational content to the public.</p>
            <div className='mt-10'>
                <Link to='/events' className='btn btn-primary'>Our Events</Link>
            </div>
        </div>
        
        <div className="hidden md:block">
            <RotatingHero />
        </div>

{/* for favorite section */}
        {/* <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box'>
            {
                carouselImages.map((image)=> { 
                    return <div key = {image} className='carousel-item'> 
                    <img src={image} className='rounded-box h-full w-80 object-cover' />

                    </div>
                })
            }
        </div> */}
    </div>
  )
}

export default Hero