
import React from "react";
import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function StudentLoginForm(){
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
 
    const navigate=useNavigate();
    const handleSubmit=(event)=>{
     
        event.preventDefault();
        axios.post("https://crud-deployment-backend-1-gzhr.onrender.com/studentRoute/studentlogin",{username,password})
        .then(result=>{
            console.log(result)
            if(result.data==="Success"){
                alert("Login Successful")
                navigate('/studenthome')
            }else{
                alert("Incorrect Password")
            }
        })
        .catch(err =>{
           

            console.log(err)
        })
    }



  
    

    return(
        <div className="mx-auto" style={{width:'40%'}}>
            <form onSubmit={handleSubmit}>
            <input onChange={(event)=>setUsername(event.target.value)} class="form-control my-2" placeholder="Enter Student Username" />
            <input onChange={(event)=>setPassword(event.target.value)} class="form-control" placeholder="Enter Password" />
            <button  type="submit" class="btn btn-success d-block mx-auto my-3">Submit</button>
            
            

            </form>
            
        </div>
    )
    }
