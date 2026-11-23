import Image from 'next/image';
import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import TodaysButton from '@/Components/DetailTrain/TodaysButton';
import SavedButton from '@/Components/DetailTrain/SavedButton';

const getTrainings = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  return res.json();
};

// ✅ FIXED: Accept the `params` promise directly here
async function TrainingDetail({ params }) {
  // ✅ FIXED: Await params safely inside the Suspense boundary
  const { trainId } = await params;

  const trainingsData = await getTrainings();
  const train = trainingsData.find((t) => t.id === Number(trainId));

  if (!train) notFound();

  console.log(train);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Optional Header (to match screenshot) */}
        <div className="flex justify-between items-center mb-10 border-b border-zinc-800 pb-4">
          <div className="font-bold text-xl tracking-wider text-white">FITLOG</div>
          <div className="text-sm text-zinc-400">Workouts &nbsp; &nbsp; My Plan</div>
        </div>

        {/* Main Card Container */}
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
              <Image
                src={train.image}
                alt={train.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Side: Details */}
          <div className="w-full lg:w-1/2 flex flex-col">
            
            {/* Title & Description */}
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase mb-3 tracking-tight">
              {train.name}
            </h1>
            <p className="text-zinc-400 text-sm md:text-base mb-6 leading-relaxed">
              {train.description}
            </p>

            {/* Badges */}
            <div className="flex gap-2 mb-8">
              <span className="bg-[#a3e635] text-black text-xs font-bold px-3 py-1 rounded-full uppercase">
                {train.difficulty}
              </span>
              <span className="bg-[#a3e635] text-black text-xs font-bold px-3 py-1 rounded-full uppercase">
                Strength
              </span>
            </div>

            {/* Stats Table */}
            <div className="space-y-3 mb-8 text-sm">
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Equipment</span>
                <span className="font-medium">{train.equipment || "Barbell, Bench"}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Difficulty</span>
                <span className="font-medium">{train.difficulty}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Sets</span>
                <span className="font-medium">{train.sets || 4}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Reps</span>
                <span className="font-medium">{train.reps || "8-10"}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Duration</span>
                <span className="font-medium">{train.duration} min</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Calories</span>
                <span className="font-medium">{train.caloriesBurned} kcal</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Rating</span>
                <span className="font-medium">{train.rating || "4.8"}</span>
              </div>
            </div>

            {/* Instructions */}
            <div className="mb-10">
              <h3 className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-3">Instructions</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-zinc-300">
                {(train.instructions || [
                  "Lie on the bench with eyes under the bar and feet planted.",
                  "Unrack with secure elbows and lower the bar to mid-chest.",
                  "Press up in a slight arc until elbows lock without bouncing.",
                  "Keep shoulder blades pinched and a natural arch in the back."
                ]).map((step, idx) => (
                  <li key={idx} className="leading-relaxed pl-1">{step}</li>
                ))}
              </ol>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <TodaysButton train={train} />
              <SavedButton train ={train}/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// ✅ FIXED: Page is now synchronous (no async, no await params)
const DetailsPage = ({ params }) => {
  return (
    <Suspense fallback={<p className="p-12 text-white">Loading...</p>}>
      <TrainingDetail params={params} />
    </Suspense>
  );
};

export default DetailsPage;