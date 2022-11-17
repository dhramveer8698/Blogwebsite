import React from 'react';
import {db} from '../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link} from 'react-router-dom';

const Create = () => {
  const [tittle, setTittle] = useState("");
  const [blog, setBlog] = useState("");
  const [image, setImage] = useState("");
  const [writername, setWritername] = useState("");
  const history = useNavigate();

  const SubmitBlog =async (e)=>{
    e.preventDefault();
      console.log("form",blog,writername,tittle,image);
      try {
        if(blog===""){
          alert("Blog can not be empty!")
        }
        else if(writername===""){
          alert("WriterName can not be empty!")
        }
        else if(tittle===""){
          alert("Tittle can not be empty!")
        }
        else{
          const abcd=await addDoc(collection(db, 'creates'), {
            tittle:tittle,
            blog:blog,
            image:image,
            writername:writername,
            createdAt: Timestamp.now()
          }).then(()=>{
            alert("Data saved successfully!")
            setBlog("")
            setWritername("")
            setTittle("")
            setImage("")
            history("/read");
          });
          console.log("abcd",abcd)
        }}catch (err) {
          console.log("error",err)
          alert(err)
        }};   


  return (
    <>
    <div className='mask101'>
    <div className='container'>
    <div className='d-flex justify-content-between'>
    <div className='text252 col-sm-10 fs-1'>Create Blog</div>
    <div className='text241 col-sm-2 fs-1'>
    <Link to ="/read">
    <button className='button7'>Show Data</button>
    </Link>
    </div>
    </div>
    <div className="contact col-lg-6 bg-white rounded-4 shadow mx-auto ">
        <h1 className='text251 ms-5'>Create a blog</h1>
        <div className="mb-3 ms-5 me-5">
        <input type="text" value={tittle} onChange={(e) => setTittle(e.target.value)} className="form-control pt-2 fs-5" id="Name" placeholder="Title" name="text" required/>
        <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="mb-3 ms-5 me-5">
        <textarea className="form-control pt-2 fs-5" value={blog} onChange={(e) => setBlog(e.target.value)}   rows="3" id="comment" placeholder="Blog" name="text" required/>
        <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="mb-3 ms-5 me-5">
        <input name="text" value={image} onChange={(e) => setImage(e.target.value)} className="form-control pt-2 fs-5" placeholder="Image Url"/>
        <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="mb-3 ms-5 me-5">
        <input type="text" value={writername} onChange={(e) => setWritername(e.target.value)} className="form-control pt-2 fs-5" id="Name" placeholder="WriterName" name="Name" required/>
        <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <button onClick={SubmitBlog} className="button7 bg-primary border-0 mt-3">Blog Stored</button>
        </div>
        </div>
        </div>
    </>
  )
}
export default Create;
