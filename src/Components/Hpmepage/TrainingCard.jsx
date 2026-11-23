import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TrainingCard = ({train}) => {
    return (
       <div className="card bg-base-100 w-96 shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      {/* Image */}
      <figure className="h-48 overflow-hidden">
        <Image
          src={train.image}
          alt={train.name || 'Training image'}
          width = {500}
          height={700}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body">
        {/* Title + difficulty */}
        <div className="flex items-start justify-between gap-2">
          <h2 className="card-title">
            {train.name || `Exercise #${id}`}
          </h2>
          <span className={`badge ${train.difficultyColor} badge-sm`}>
            {train.difficulty}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-base-content/70">{train.description}</p>

        {/* Stats row */}
        <div className="flex flex-wrap gap-3 mt-2 text-sm">
          <div className="flex items-center gap-1">
            <span className="font-semibold">{train.duration}</span>
            <span className="text-base-content/60">min</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-semibold">{train.caloriesBurned}</span>
            <span className="text-base-content/60">kcal</span>
          </div>
        </div>

        {/* Equipment */}
        <div className="text-xs text-base-content/60 mt-1">
          🏋️ {train.equipment}
        </div>

        {/* Action */}
        <div className="card-actions justify-end mt-3">
          <Link href={`/trainingList/${train.id}`} className="btn btn-primary btn-sm"> 
          <button className="btn btn-primary btn-sm">
            View Training
          </button>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default TrainingCard;