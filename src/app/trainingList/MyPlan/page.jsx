  "use client";

import { TrainContext } from '@/context/TrainContext';
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MyPlan = () => {
  const { plan = [], saved = [] } = useContext(TrainContext);
  const [activeTab, setActiveTab] = useState('plan'); // 'plan' or 'saved'

  // 1. Calculate Dynamic Stats for Today's Plan
  const totalExercises = plan.length;
  const totalMinutes = plan.reduce((sum, item) => sum + (Number(item.duration) || 0), 0);
  const totalCalories = plan.reduce((sum, item) => sum + (Number(item.caloriesBurned) || 0), 0);

  // 2. Determine which list to show based on the active tab
  const currentList = activeTab === 'plan' ? plan : saved;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12 font-sans selection:bg-[#a3e635] selection:text-black">
      <div className="max-w-5xl mx-auto">
        
        {/* --- Page Title & Stats --- */}
        <div className="mb-12 pt-8"> 
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase mb-2 tracking-tight">My Plan</h1>
          <p className="text-zinc-400 text-sm mb-12">Cap of five lifts for today. Finish them, then load more.</p>

          <div className="grid grid-cols-3 gap-4 mb-12">
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-1">Exercises</p>
              <p className="text-4xl font-bold text-[#a3e635]">{totalExercises}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-1">Minutes</p>
              <p className="text-4xl font-bold">{totalMinutes}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-1">Calories</p>
              <p className="text-4xl font-bold">{totalCalories}</p>
            </div>
          </div>
        </div>

        {/* --- Tabs & Sort --- */}
        <div className="flex justify-between items-center border-b border-zinc-800 pb-4 mb-8">
          <div className="flex gap-2">
            <button 
              onClick={() => setActiveTab('plan')}
              className={`px-4 py-2 text-sm rounded-md transition-colors ${activeTab === 'plan' ? 'bg-zinc-800 text-white font-medium shadow-sm' : 'text-zinc-400 hover:text-white'}`}
            >
              Today's Plan
            </button>
            <button 
              onClick={() => setActiveTab('saved')}
              className={`px-4 py-2 text-sm rounded-md transition-colors ${activeTab === 'saved' ? 'bg-zinc-800 text-white font-medium shadow-sm' : 'text-zinc-400 hover:text-white'}`}
            >
              Saved
            </button>
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <span>Sort By</span>
            <button className="flex items-center gap-1 text-white hover:text-[#a3e635] transition-colors font-medium">
              Duration
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
          </div>
        </div>

        {/* --- Dynamic Content Area (Cards OR Empty State) --- */}
        {currentList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentList.map((train) => (
              <div key={train.id} className="flex bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition-colors">
                <div className="relative w-32 h-full min-h-[120px] bg-zinc-800 shrink-0">
                  {train.image && (
                     <Image src={train.image} alt={train.name} fill className="object-cover" />
                  )}
                </div>
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-bold text-lg leading-tight uppercase mb-1">{train.name}</h3>
                    <p className="text-xs text-zinc-400">{train.equipment || "Equipment N/A"}</p>
                  </div>
                  <div className="flex gap-4 text-xs font-semibold text-[#a3e635] mt-3">
                    <span>{train.duration} min</span>
                    <span>{train.caloriesBurned} kcal</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* --- Empty State --- */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h2 className="text-2xl font-bold mb-2">NOTHING HERE YET</h2>
            <p className="text-zinc-400 text-sm mb-6">
              {activeTab === 'plan' 
                ? "Browse the library and add a lift to get today moving." 
                : "You haven't saved any workouts yet."}
            </p>
            <Link href="/workouts" className="bg-[#a3e635] hover:bg-[#84cc16] text-black font-bold py-2.5 px-6 rounded-full transition-colors text-sm">
              Go to workouts
            </Link>
          </div>
        )}

        {/* --- Footer --- */}
        <footer className="flex justify-between items-center mt-32 pt-6 border-t border-zinc-800 text-xs text-zinc-600">
          <div className="flex items-center gap-2 font-bold tracking-widest text-zinc-400">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 12h12"/><path d="M12 6v12"/></svg>
             FITLOG
          </div>
          <div>
            © 2026 FitLog — Workout Library. Train hard. Log honest.
          </div>
        </footer>

      </div>
    </div>
  );
};

export default MyPlan;