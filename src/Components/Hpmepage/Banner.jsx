import Image from 'next/image';
import React from 'react';
import banner from '@/assets/banner.png'

const Banner = () => {
    return (
        <section className='mt-10 container mx-auto'>
            
        <div className='grid grid-cols-2 gap-2 justify-between items-center bg-amber-200 rounded-4xl p-4'>
            
            <div>
              <p>
                WORKOUT LIBRARY
              </p>
              <h1 className='text-6xl font-bold'>
                TRAIN WITH INTENT. 
<br />

                LOG EVERY SET.
              </h1>
              <p>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                     into today's plan, and watch the week's work add up. 
                     </p>
                     <button className='bg-amber-300 rounded-2'>
                        BROWSE WORKOUTS
                     </button>
            </div>
            <div>
              <Image src = {banner} alt=''/>

            </div>

        </div>
        </section>
    );
};

export default Banner;