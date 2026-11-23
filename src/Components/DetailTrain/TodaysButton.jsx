"use client"

import React,{ useContext } from 'react';

import { TrainContext } from '@/context/TrainContext'
import { toast } from 'react-toastify';

const TodaysButton = ({train}) => {

    const {plan,setPlan} = useContext(TrainContext)

    const handleToday=()=>{
        setPlan([...plan,train])
        console.log(plan)
        toast.success(`${train.name} added to plan`)

    }
    return (
        <button className="flex-1 bg-[#a3e635] hover:bg-[#84cc16] text-black font-bold py-3 px-6 rounded-md transition-colors text-sm" onClick={()=>handleToday()}>
                                + Add to Today&apos;s Plan
                            </button>
    );
};

export default TodaysButton;