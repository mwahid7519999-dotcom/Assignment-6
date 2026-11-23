

"use client"

import React,{ useContext } from 'react';

import { TrainContext } from '@/context/TrainContext'
import { toast } from 'react-toastify';

const Savedbutton = ({train}) => {
     const {saved,setSaved} = useContext(TrainContext)

    const handleSaved=()=>{
        setSaved([...saved,train])
        console.log(saved)
        toast.success(`${train.name} added to saved`)
    }

    return (
         <button className="flex-1 bg-transparent hover:bg-zinc-800 text-white border border-zinc-700 font-bold py-3 px-6 rounded-md transition-colors text-sm flex items-center justify-center gap-2" onClick = {()=>{handleSaved()}}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                                Save for later
                            </button>
    );
};

export default Savedbutton;