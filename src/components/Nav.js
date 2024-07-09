import {Link} from "react-router-dom"


export default function Nav(){
    return(
        <nav class="navbar " style={{marginBottom:'80px'}}>
            <Link to="/" class="navbar-brand"><h2 style={{marginTop:"50px"}}>Login,
            to your portal</h2></Link>
            <div class="nav" style={{marginTop:"50px"}}> 
                
                    <Link to="/student-login" class="btn btn-primary m-1 p-2"> Student Login</Link>
                           
                
                    <Link to="/faculty-login" class="btn btn-warning m-1 p-2"> Faculty Login</Link>
                              
                
                <Link to="/parent-login" class="btn btn-danger m-1 p-2"> Parent Login </Link>
                
                
                              

                {/* <Link to="/student-list" class="nav-link"> Student List </Link> */}
            </div>
        </nav>
    )
}
