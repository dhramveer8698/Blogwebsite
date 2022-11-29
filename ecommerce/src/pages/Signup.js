import React from 'react';
import {db} from '../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link} from 'react-router-dom';

const Signup = () => {
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
          const abcd=await addDoc(collection(db, 'ecommerces'), {
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
            history("/home");
          });
          console.log("abcd",abcd)
        }}catch (err) {
          console.log("error",err)
          alert(err)
        }};   

  return (
    <>
        <section className="text257">
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card">
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>
              <form>
                <div className="form-outline">
                <label className="form-label fs-5" for="form3Example1cg">Your Name</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="form3Example1cg" className="form-control form-control-lg" />
                  <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-outline">
                  <label className="form-label fs-5" for="form3Example3cg">Your Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="form3Example3cg" className="form-control form-control-lg" required/>
                  <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-outline">
                <label className="form-label fs-5" for="form3Example4cg">Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form3Example4cg" className="form-control form-control-lg" /> 
                  <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-outline">
                <label className="form-label fs-5" for="form3Example4cdg">Repeat your password</label>
                  <input type="password" value={repeatp} onChange={(e) => setRepeatp(e.target.value)} id="form3Example4cdg" className="form-control form-control-lg" />
                  <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-check d-flex justify-content-center">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label className="form-check-label fs-5" for="form2Example3g">
                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                <Link to ="/home">
                  <button type="button"
                    onClick={SubmitBlog}
                    className="text259 btn">Signup</button>
                    </Link>
                </div>
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

export default Signup;
