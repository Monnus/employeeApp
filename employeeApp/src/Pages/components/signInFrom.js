import { IMAGES } from "../..";
import "../../styles/signInDesign.css";
import React from "react"
import loginIMG from "../../svgs/person-svgrepo-com.svg"
import {Link} from "react-router-dom"


function LeftAndRightSide(){

    return (
        <>
<div className="BGImage" style={{background:`url(${IMAGES.bgIMAGE1})`}}>
<div className="containerLogo">

    <h2>User Login</h2>
    <img src={IMAGES.logo} alt='user login'/>
    
    <p><strong>Welcome</strong> user you are on the sign in page</p>
    <p>By signing into your account, you have agreed to <b><i>CUP-PENGUIN Website</i></b> Terms, Privacy Policy, and Licensing Terms</p>
    <p>Don't have an account then regester <Link to="/">here</Link></p>
</div>
</div>
 <div className="FormInputs">
 
    <img src={loginIMG} alt="missing profile img" style={{width:"200px",height:"200px",background:"gray",borderRadius:"100%",margin:"0 0 50px 0"}}/>
        <form>
        <label>Employee Id:</label>
        <br></br>
        <input type="text" placeholder="Your Emplyee Id " name="EmployeeId" className="inputs"/>
        <br></br>
        <br></br>
        <label>Password:</label>
        <br></br>
        <input type="text" placeholder="Password" name="Password" className="inputs"/>
        <br></br>
        <br></br>
        <input type="submit" placeholder="submit" className="submitBtn" />
        </form>
 </div>
 </> 
    )
}


const SignContainer=()=>{
    return (
<div className="container">
   
    <LeftAndRightSide/>
</div>
    )

}

export default SignContainer;