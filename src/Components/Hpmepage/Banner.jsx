import Image from 'next/image';
import React from 'react';
import banner from '@/assets/banner.png'

const Banner = () => {
    return (
        <section className='mt-10'>
            
        <div className='grid grid-cols-1 gap-2 items-center'>
            
            <div>
              <p>
                WORKOUT LIBRARY
              </p>
              <h1 className='text-4xl font-bold'>
                TRAIN WITH INTENT. 
<br />

                LOG EVERY SET.
              </h1>
              <p>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                     into today's plan, and watch the week's work add up. 
                     </p>
                     <button>
                        BROWSE WORKOUTS
                     </button>
            </div>
              <Image src = {banner}/>
            <div>

            </div>
        </div>
        </section>
    );
};

export default Banner;