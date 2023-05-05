import React from 'react'
import {useState}  from "react"
import {Link} from "react-router-dom"
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";


function Signup() {
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [username,setUsername] = useState("")


    const handleSubmit = async (ev) => {
        ev.preventDefault()
        

        
        const res = await fetch("localhost:5050/api/user/signup" , {
            method:"POST",
            body: JSON.stringify({email,password,username})
        })

        const data = await res.json()

        if(!data.ok){
            console.log("there is an error")
        }

        if(data.ok){
            console.log("No error")
        }
    

    }



    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="white">
                    Sign Up
                </Typography>
                <Typography color="white" className="mt-1 font-normal">
                    Enter your details to register.
                </Typography>
                <form  onSubmit={handleSubmit}  className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                    <Input name="username" className="text-white" size="lg" label="username"  onChange={(e)=> setUsername(e.target.value)} />
                    <Input name="email"  className="text-white" size="lg" label="Email" onChange={(e)=> setEmail(e.target.value)} />
                    <Input name="password"  className="text-white" type="password" size="lg" label="Password" onChange={(e)=> setPassword(e.target.value)} />
                    </div>
                    <Checkbox
                    label={
                        (
                        <Typography
                            variant="small"
                            color="white"
                            className="flex items-center font-normal"
                        >
                            I agree the
                            <a
                            href="#"
                            className="font-medium transition-colors hover:text-blue-500"
                            >
                            &nbsp;Terms and Conditions
                            </a>
                        </Typography>
                        )
                    }
                    containerProps={{ className: "-ml-2.5" }}
                    />
                    <Button type="submit"  className="mt-6" fullWidth>
                    Register
                    </Button>
                    <Typography color="white" className="mt-4 text-center font-normal">
                    Already have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                    >
                        Sign In
                    </a>
                    </Typography>
                </form>
                </Card>
            </div>
        </>
            
            
    )
}

export default Signup
