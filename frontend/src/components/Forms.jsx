import React from 'react'
import {useState}  from  "react"




function Forms() {
 const [title, setworkTitle] = useState("")
 const [load, setworkoutLoad] = useState("")
 const [reps, setworkoutReps] = useState("")
 const [errors, setErrors] = useState("")
 
 const handleForm = async (ev) =>{
    ev.preventDefault()

    const workout = {title,load,reps}
    

    const response = await fetch("api/workout" , {
        method:"POST",
        body: JSON.stringify,
        headers:{
            "Content-Type":"application/json"
        }
    })

    const  data = await response.json()
    if(!response.ok){
        setErrors(data.error)
    }


 
    
 }
 
 


    return (
        <div>
            <form action="" className="create" onSubmit ={handleForm} >
                <h3>Add Workout</h3>
                <div>
                    <label htmlFor="title">Exercise's Title</label>
                    {/* Listen to onchange event in the form and set the value to e.value.target which represents the current value of the form */}
                    <input type="text" value={title}  className="title" onChange={(ev) => setworkTitle(ev.value.target)}/>
                </div>
                <div>
                    <label htmlFor="reps">Reps </label>
                    <input type="Number" className="reps" value={reps}  onChange={(ev)=> setworkoutReps(ev.value.target)}/>
                </div>
                <div>
                    <label htmlFor="load">Load (kg)</label>
                    <input type="Number" className="load"  value={load} onChange={(ev)=> setworkoutLoad(ev.target.value)}/>
                </div>

                <button>Add Workout</button>
                <div>Error: {errors}</div>
            </form>
        </div>
    )
}

export default Forms
