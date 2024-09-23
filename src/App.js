
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const[password, setpassword]=useState('')
  const[message,setMessage]= useState('')
  function handlechange(e) {
    setpassword(e.target.value)
  }
  const handleValidation=(e) =>{
    e.preventDefault()
    const regExp= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
   if(password === ""){
    setMessage("please enter password")
   } else if(regExp.test(password)) {
    setMessage("password is valid")
    alert('password is valid')
   } else if(!regExp.test(password)){
    setMessage("password is  not valid")
   }else {
    setMessage("")
   }
  
  
  }
  return (
    <div  style={{ backgroundColor: 'blue' }}className="container-fluid w-100 p-5 d-flex justift-content-center align-items-center  ms-3 ">
    <div  className='card-password p-3 bg-white w-50'>
   
      <h2>Pasword validation</h2>
      
     <form onSubmit={handleValidation}>
     <label htmlForm='Email' className='form-control-label'>Email</label> 
     <input type='Email' className='form-control'></input><br></br>
      <label htmlForm='password' className='form-control-label'>Password</label>
      
       <input type='password'   
       className='form-control' 
       onChange={handlechange} 
        value={password}/>
       <p>{message}</p>
       
      <button className=' btn-success'>Check</button>

     </form>
      
    </div>
    </div>
  );
}

export default App;
