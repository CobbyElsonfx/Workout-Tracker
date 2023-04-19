import React from 'react'
import {useEffect , useState} from "react"
import axios from "axios"
import WorkoutDetails from "../components/WorkoutDetails"
import Forms from  "../components/Forms"
import {useWorkoutContext} from "../hooks/useWorkout"



//states


function Home() {
    const {workouts, dispatch} = useWorkoutContext()


//fecth for workouts
const fetchWorkout = async ()=>{
        try {
            const response = await  fetch("http://localhost:8585/api/workouts")
            const data =  await response.json()
            dispatch({type: "SET_WORKOUT" , payload: data})
        } catch (error) {
            console.error(error)
        }
        
   
}

useEffect(() => {
 fetchWorkout()  
}, [])


    
    return (
        <div className="home">
            <div className="workouts">
                {/* mapping throught the array of object to get each workout object and pass it a  prop */}
              {workouts && workouts.map((workout)=> <WorkoutDetails workout = {workout} key={workout._id}/>  )}   
            </div>
            <Forms/>

         </div>
    )
}

export default Home
