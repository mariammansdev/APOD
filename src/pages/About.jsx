import { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
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
      </div>
      <p className="text-lg text-base-content leading-relaxed mt-9">
        Welcome to your <span class="font-semibold text-secondary">daily cosmic scroll</span>—where space feels less like a science textbook and more like pure wonder.
        We bring you <span class="font-semibold">NASA’s Astronomy Picture of the Day (APOD)</span> in a way that’s easy, fun, and totally approachable.
        <br /><br />
        No jargon. No rocket science. Just <span class="text-accent">mind-blowing images of galaxies, planets, and nebulae</span>, paired with short, clear explanations anyone can enjoy.
        <br /><br />
        Because loving the universe shouldn’t require a degree—it should just feel awesome.
        <div className="flex">
          <strong class="block mt-4 text-secondary">One picture. One story. Every day. Ready to explore?</strong>
          <div className='mt-10'>
            <Link to='/events' className='btn btn-primary'>Our Events</Link>
          </div>
        </div>
      </p>
    </>
  );
};
export default About;
