import React, { Suspense } from 'react';
import TrainingCard from '@/Components/Hpmepage/TrainingCard';

const getTrainings = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
};

const TrainingList = async () => {
    const trainingsData = await getTrainings();
    console.log(trainingsData);
    return (
        <div className='grid grid-cols-3 gap-2'>
            {
                trainingsData.map((train, idx) => (
                    <TrainingCard key={idx} train={train} />
                ))
            }
        </div>
    );
};

const Trainings = () => {
    return (
        <section className='container mx-auto mt-17.5'>
            <Suspense fallback={<p>Loading...</p>}>
                <TrainingList />
            </Suspense>
        </section>
    );
};

export default Trainings;