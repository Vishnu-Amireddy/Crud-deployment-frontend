import { useState } from "react";
import FacultyLoginForm from "./FacultyLoginForm";
import Axios from "axios"


export default function FacultyList(){
    const[arr,setArr]=useState([])


    const getState =(childData)=>{
        setArr(childData);
    }


    const handleSubmit = (event)=>{
        	const data ={regNo:arr[0],Password:arr[1]};
            Axios.post("https://crud-deployment-backend-1-gzhr.onrender.com/teacherRoute/faculty-login",data)
        .then((res)=>{
            if(res.status === 200)
                alert("login successful")
            else
                Promise.reject();
        })
        .catch((err)=>{
            alert(err);
        })
	   event.target.reset();
    }


    return(
        <form onSubmit={handleSubmit}>
            <FacultyLoginForm getState={getState} />
        </form>
    )
}
