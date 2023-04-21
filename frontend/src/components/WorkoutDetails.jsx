import React from 'react'
import {useWorkoutContext} from "../hooks/useWorkout"





function WorkoutDetails({workout}) {
  const {dispatch} = useWorkoutContext()

  
  const deleteHandler = async ()=> {
    console.log(`http://localhost:8585/api/workouts/ ${workout._id}`)
    const response =  await fetch(`http://localhost:8585/api/workouts/${workout._id}` , {
      method: "DELETE",
    })
    const data =  await response.json()

    if(response.ok){
      dispatch({type: "DELETE_WORKOUT" , payload: data})
    }
}
    return (
        <div className="workout-details">
          <h4>{workout.title}</h4>
          <p><strong>Load(kg):</strong> {workout.load}</p>
          <p><strong>Reps:</strong> {workout.reps}</p>
          <p>{workout.createdAt}</p>
          <span onClick = {deleteHandler}>Delete</span>
        </div>
    )
}

export default WorkoutDetails
