import React from 'react'

function WorkoutDetails({workout}) {
    return (
        <div className="workout-details">
          <h1>{workout.title}</h1>
          <h2>{workout.reps}</h2>
        </div>
    )
}

export default WorkoutDetails
