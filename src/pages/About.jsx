import { Link, useNavigation } from "react-router-dom";
import LoadingState from "./LoadingState";
import { BsRocketTakeoff } from "react-icons/bs";
import { RotatingHero } from "../components";

const About = () => {
  const navigation = useNavigation();
  if (navigation.state == 'loading') {
    return <div className='w-full h-[90vh]'>
      <LoadingState />
    </div>
  }

  return (
    <>
      <div className="absolute inset-0 -z-10 flex justify-center">
        <RotatingHero size={600} hideSun={true} />
      </div>

      {/* <div className={`flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center`}>

        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>
          We love
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              APOD
            </div>
          </div>
        </div>
      </div> */}
      <p className="text-2xl  leading-relaxed mt-9 font-exo2 mb-16">
        <span className="space-parallax inline-block">
          Welcome to your <span className="font-semibold text-secondary">daily cosmic scroll</span>—where space feels less like a science textbook and more like pure wonder.
        </span>
        <span className="space-parallax inline-block" >
          We bring you <span className="font-semibold">NASA's Astronomy Picture of the Day (APOD)</span> in a way that's easy, fun, and totally approachable.
        </span>
        <br /><br />
        <span className="space-parallax inline-block">
          No jargon. No rocket science. Just <span className="text-accent">mind-blowing images of galaxies, planets, and nebulae</span>, paired with short, clear explanations anyone can enjoy.
        </span>
        <br /><br />
        <span className="space-parallax inline-block" >
          Because loving the universe shouldn't require a degree—it should just feel awesome.
        </span>
        <div className="flex space-parallaxx" style={{ '--delay': '3.6s' }}>
          <strong className="block mt-6 text-secondary ">One picture. One story. Every day. Ready to explore?</strong>
          <div className='mt-3 mx-2 cursor-pointer  transition-transform duration-300 ease-out hover:-translate-y-1 hover:-rotate-6
            '>
            <Link to='/events' ><BsRocketTakeoff size={50} /></Link>
          </div>
        </div>
      </p>
    </>
  );
};
export default About;
