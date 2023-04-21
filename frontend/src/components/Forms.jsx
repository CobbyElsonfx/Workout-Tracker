import React from 'react'
import {useState}  from  "react"
import {useWorkoutContext} from "../hooks/useWorkout"







const Forms = () =>{
    const {dispatch} = useWorkoutContext()

 const [title, setworkTitle] = useState("")
 const [load, setworkoutLoad] = useState("")
 const [reps, setworkoutReps] = useState("")
 const [errors, setErrors] = useState(null)

 
 const handleForm = async (ev) =>{
    ev.preventDefault()


    const workout = {title,load,reps}
    
   // fetch the data from the backend server
    const response = await fetch("http://localhost:8585/api/workouts" , {
        method:"POST",
        body: JSON.stringify(workout),
        headers:{
            "Content-Type":"application/json"
        }
    })
     
     //parse data to json format

    const  data = await response.json()
    //check if data is okay 
    // this error is comming from the response for the post  controller in the workout.js file in the controllers

    if(!response.ok){
        setErrors(data.error)
    }

    if(response.ok){
        setErrors(null)
        setworkTitle("")
        setworkoutLoad("")
        setworkoutReps("")
        dispatch({type:"CREATE_WORKOUT", payload: data})
    }
    
 }
 
 


    return (
        
            <form  className="create" onSubmit ={handleForm} >
                <h3>Add Workout</h3>
                
                    <label htmlFor="title">Exercise's Title</label>
                    {/* Listen to onchange event in the form and set the value to e.value.target which represents the current value of the form */}
                    <input type="text" value={title}  className="title" onChange={(ev) => setworkTitle(ev.target.value)}/>
                
                
                    <label htmlFor="reps">Reps </label>
                    <input type="Number" className="reps" value={reps}  onChange={(ev)=> setworkoutReps(ev.target.value)}/>
                
                
                    <label htmlFor="load">Load (kg)</label>
                    <input type="Number" className="load"  value={load} onChange={(ev)=> setworkoutLoad(ev.target.value)}/>
                

                <button>Add Workout</button>
                {errors && <div className="error">{errors} </div>}</form>
    
    )
}

export default Forms
