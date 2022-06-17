import React,{useRef,useState} from "react"
import "../../styles/formDesign.css";
import {Link} from "react-router-dom"

function FormElements(){

 const [employeeID,setEmployeeID] = useState("######")
  const name=useRef(null);
  const surname=useRef(null);
  const number=useRef(null);
  const email=useRef(null);
  const profilePic=useRef(null);
  const employeeNumber=useRef(null);
  const password=useRef(null)
  const user={
    name:"",
    surname:"",
    number:false,
    email:"",
    profilePic:"",
    fullObj:false,
    allcheckspassed:false,
    loginName:"",
    employeeID:""
};

function clear(input){
  input.value="";
}

function createID(){
  function random(){
return  Math.floor(Math.random()*26)+1;
  }
  const ArrNUBers =[random()];
  const letters={
    1:"A",
    2:"B",
    3:"C",
    4:"D",
    5:"E",
    6:"F",
    7:"G",
    8:"H",
    9:"I",
    10:"J",
    11:"K",
    12:"L",
    13:"M",
    14:"N",
    15:"O",
    16:"P",
    17:"Q",
    18: "R",
    19: "S",
    20: "T",
    21: "U",
    22: "V",
    23: "W",
    24: "X",
    25: "Y",
     26:"Z"
  }
  return [ArrNUBers[0],letters[ArrNUBers[0]],ArrNUBers[0],letters[ArrNUBers[0]],ArrNUBers[0],letters[ArrNUBers[0]]].join("");
}
console.log(createID());


function getEmplyeenumber(e){
return setEmployeeID(createID());
}
// ===========================================name=================================================
  function valifname(input){
    input.focus();
    if(input.value===""){
        user.allcheckspassed=false;
        return alert("please fill out Name");
    }
    if(input.value.length <2){
        user.allcheckspassed=false;
        return alert("name can't be less then 2 letters");
    }
    let str = input.value;

    let matches2=str.match(/.[%$#@!()^*,/;'|</>\s]/);
    if(matches2){
        user.allcheckspassed=false;
        return alert("Oops your using spacial cheracters");
    }
    let  matches = str.match(/(\d+)/);
    console.log(str,matches);
    if (matches){
        user.allcheckspassed=false;
        return alert("Oops you used numbers in the Name feild :-D ");
    }
    user.allcheckspassed=true;
  user.name=input.value.toLowerCase();
  valiSurname(surname.current);
  clear(input);
}
// ==================================================surname=======================================
function valiSurname(input){
  input.focus();
  if(input.value===""){
      user.allcheckspassed=false;
      return alert("please fill out Surname");
  }
  if(input.value.length <2){
      user.allcheckspassed=false;
      return alert("Surname can't be less then 2 letters");
  }
  let str = input.value;
  let  matches = str.match(/(\d+)/);
  let matches2=str.match(/.[%$#@!()^*,/;'|</>\s]/);
  if(matches2){
      user.allcheckspassed=false;
      return alert("Oops your using spacial cheracters");
      
  }
      
  console.log(str,matches);
  if (matches){
      user.allcheckspassed=false;
      return alert("Oops you used numbers in the Name feild :-D ");
  }
  user.allcheckspassed=true;
  user.surname=input.value.toLowerCase();
  numValidate(number.current);
clear(input)
}
// =================================================number=============================================
function numValidate(input){
  if(input.value===""){
      user.allcheckspassed=false;
      return alert("please fill out number field");
  }
  if(input.value.length <10){
      user.allcheckspassed=false;
      return alert("number can't be less then 10");
  }
  let number=input.value;

  let match=number.match(/.[a-zA-Z %$#@!()^*,/;'|</>\s]/gi);
  if(match){   
           user.allcheckspassed=false;
      return alert(" Only numbers in the numbers feild ^_^");
  }
  user.allcheckspassed=true;
  user.number=input.value;
  imgValidate(profilePic.current);
  clear(input);
}
// =========================================================image=================================
function imgValidate(input){
console.log(input.files[0]);
  switch(input.files[0].type){
      case "image/jpeg":
console.log("jpep image loaded");
     console.log(input.files[0].name);
     break
     case "image/png":
        console.log("png image loaded");
     console.log(input.files[0].name);
     break;
     default:
      user.allcheckspassed=false;
         return alert("Oops we dont support this file format");
  }
  user.allcheckspassed=true;
  user.profilePic=input.files[0].name;
validatPass(password.current);
  clear(input);
}
// =================================================password==========================================
    function validatPass(input){
    input.focus();
    if(input.value===""){
        user.allcheckspassed=false;
        return alert("please fill out password");
    }
    if(input.value.length <8){
        user.allcheckspassed=false;
        return alert("password can't be less then 8 chracters");
    }
  

    user.allcheckspassed=true;
  user.password=input.value;
emplyeeNumberVal(employeeNumber.current);
  clear(input);

}


//==================================================Employee id=========================================
function emplyeeNumberVal(input){
  input.focus();
  if(input.value===""){
      user.allcheckspassed=false;
      return alert("please fill out Employee Id field");
  }
  if(input.value.length <3){
      user.allcheckspassed=false;
      return alert("Employee id can't be less then 3 chracters");
  }


  user.allcheckspassed=true;
user.employeeID=input.value;
emailValidate(email.current)
clear(input);

}



// =======================================email===================================================
function emailValidate(input) {
  const emailRegexp = new RegExp(
/^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i )  // eslint-disable-line

  if(emailRegexp.test(input.value)===false){
      user.allcheckspassed=false;
      return alert("Email format not accepted ");
  }
  user.allcheckspassed=true;
  user.email=input.value.toLowerCase();
  clear(input);
}

function submitBtn(e){
  e.preventDefault();
  valifname(name.current);

if(user.allcheckspassed && user.name && user.surname && user.number && user.email && user.profilePic && user.employeeID){
    user.fullObj=true;
    user.loginName=`${user.name[0]}${user.surname[0]}`;
window.localStorage.setItem(`${user.name[0]}${user.surname[0]}`,JSON.stringify(user));
alert("congrates your information was accepter");
}
user.fullObj=false;
console.log(user)
}


console.log(user);



    return(
        <>
      <div className="leftsideFrorm">
        {/* form elements */}
        <div><h2><Link to="/pages/sign">Sign IN</Link></h2><h2><Link to="/">Sign Up</Link></h2></div>
        <form >
                  <label>First Name*</label>
                <br></br>    
                  <input placeholder='First Name' required name="fname" type="text" className="fname" ref={name}/>
                  <br></br>
                  <br></br>
                  <label>Last Surname*</label>
                <br></br>
                  <input placeholder='Last Name' required name="Lname" type="text" className="Lname" ref={surname}/>
                  <br></br>
                  <br></br>
                  <label>Phone number*</label>
                <br></br>  
                  <input placeholder='+27' type="text" required name="Phone" className="number" ref={number}/>
                  <br></br>
                  <br></br>
                  <label>Email*</label>
                <br></br>
                  <input placeholder='...@gmail.com' type="email" required name="email" className="email" ref={email}/>
            <br></br>
            <br></br>
            <hr></hr>
            <label>choose Image*</label>
            <br></br>
         <input type="file" className="file" ref={profilePic} />
        <br></br> 
            <br></br>
            <label>employee Num*</label>
            <br></br>
            <input placeholder='Paste emplyee number' required type="text" name="employeeNumber" className="emplyeeNumber" ref={employeeNumber}/>
            <br></br>
            <br></br>
            <label>Password*</label>
            <br></br>
            <input type="Password" placeholder='Password' required name="Password" className="password" ref={password}/>
            <br></br>
            <br></br>

            <button type='submit' onClick={submitBtn}>submit</button>
        </form>
      </div>
<div className="rightsideForm">
<button className="submit" onClick={getEmplyeenumber}>Get ID</button>
<p>Your employee Id is: <span style={{color:"red"}}>{employeeID}</span></p>
</div>
        </>
    )
}

export default FormElements;