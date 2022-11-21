import React from 'react';
import {db} from '../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import { useState } from 'react';
import { Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();


  const login =async (e)=>{
    e.preventDefault();
      console.log("form",email,password);
      try {
       if(email ===""){
          alert("Email can not be empty!")
        }
        else if(password ===""){
          alert("Password can not be empty!")
        }
        else{
          const abcd=await addDoc(collection(db, 'logins'), {
            email:email,
            password:password,
            createdAt: Timestamp.now()
          }).then(()=>{
            alert("Your have successfully login in!")
            setEmail("")
            setPassword("")
            history("/create");
          });
          console.log("abcd",abcd)
        }}catch (err) {
          console.log("error",err)
          alert(err)
        }};   
  return (
    <>
      <section class="text259 vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="/"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="form-outline mb-4 ">
          <label class="form-label text-white" for="form3Example3">Email address</label>
            <input type="email"
             value={email} 
             onChange={(e) => 
             setEmail(e.target.value)} 
             id="form3Example3" 
             class="form-control form-control-lg"
             placeholder="Enter a valid email address" />
          </div>
          <div class="form-outline mb-3">
          <label class="form-label text-white" for="form3Example4">Password</label>
            <input type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            id="form3Example4" 
            class="form-control form-control-lg"
            placeholder="Enter password" />
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label text-white" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text260">Forgot password?</a>
          </div>
          <div class="text-center text-lg-start mt-4 pt-2">
          <Link to ="/create">
            <button type="button" 
             onClick={login}
            class="text258 btn btn-primary btn-lg">Login</button></Link>
            <p class="small fw-bold mt-2 pt-1 mb-0 text-white fs-5">Don't have an account? <a href="registration"
                class="link-danger fs-5">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Login
