"use client";

import React, { createContext, useState } from 'react';

export const TrainContext = createContext({});

const TrainProvider = ({children}) => {

const [plan,setPlan]=useState([]);
const [saved,setSaved]=useState([]);

const sharedData = {
    plan,
    setPlan,
    saved,
    setSaved,
};

    return <TrainContext.Provider value = {sharedData}>{children}</TrainContext.Provider>;
    
};

export default TrainProvider;
