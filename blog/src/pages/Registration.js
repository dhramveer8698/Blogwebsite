import React from 'react';
import {db} from '../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link} from 'react-router-dom';

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatp, setRepeatp] = useState("");
  const history = useNavigate();

  const SubmitBlog =async (e)=>{
    e.preventDefault();
      console.log("form",name,email,password,repeatp);
      try {
        if(name ===""){
          alert("Name can not be empty!")
        }
        else if(email ===""){
          alert("Email can not be empty!")
        }
        else if(password ===""){
          alert("Password can not be empty!")
        }
        else if(repeatp ===""){
          alert("Repeat Password can not be empty!")
        }
        else{
          const abcd=await addDoc(collection(db, 'registrations'), {
            name:name,
            email:email,
            password:password,
            repeatp:repeatp,
            createdAt: Timestamp.now()
          }).then(()=>{
            alert("Your Account have created successfully!")
            setName("")
            setEmail("")
            setPassword("")
            setRepeatp("")
            history("/login");
          });
          console.log("abcd",abcd)
        }}catch (err) {
          console.log("error",err)
          alert(err)
        }};   

  return (
    <>
        <section class="text257">
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>
              <form>
                <div class="form-outline">
                <label class="form-label" for="form3Example1cg">Your Name</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="form3Example1cg" class="form-control form-control-lg" />
                  <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div class="form-outline">
                  <label class="form-label" for="form3Example3cg">Your Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="form3Example3cg" class="form-control form-control-lg" required/>
                  <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div class="form-outline">
                <label class="form-label" for="form3Example4cg">Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form3Example4cg" class="form-control form-control-lg" /> 
                  <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div class="form-outline">
                <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                  <input type="password" value={repeatp} onChange={(e) => setRepeatp(e.target.value)} id="form3Example4cdg" class="form-control form-control-lg" />
                  <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div class="form-check d-flex justify-content-center">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>
                <div class="d-flex justify-content-center">
                <Link to ="/login">
                  <button type="button"
                    onClick={SubmitBlog}
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                    </Link>
                </div>
                <p class="text-center text-muted mt-1">Have already an account? 
                <a href="/login"
                class="fw-bold text-body"><u>Login here</u></a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Registration
