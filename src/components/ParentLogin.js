import { useState } from "react";
import ParentLoginForm from "./ParentLoginForm";
import Axios from "axios"


export default function ParentList(){
    const[arr,setArr]=useState([])


    const getState =(childData)=>{
        setArr(childData);
    }


    const handleSubmit = (event)=>{
        	const data ={ParentID:arr[0],Password:arr[1]};
            Axios.post("https://crud-deployment-backend-1-gzhr.onrender.com/parentRoute/parent-login",data)
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
            <ParentLoginForm getState={getState} />
        </form>
    )
}
