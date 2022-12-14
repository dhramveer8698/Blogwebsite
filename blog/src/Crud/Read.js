import React, { useState,useEffect } from 'react'
import {db} from '../firebase'
import {collection,getDocs} from 'firebase/firestore';




const Read = () => {
    const[creates,setCreates]=useState([]);
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    
          useEffect( ()=>{
          console.log("fetchingData")
          const abc = fetchData();
          console.log("abc",abc);
                    },[])
          
          async function fetchData() {
            let arr=[]
              const querySnapshot = await getDocs(collection(db, "creates"));
              querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                arr=[{id:doc.id, ...doc.data()}, ...arr]
              });
              setCreates(arr);
          } 
  return (
    <>
    {creates.length===0 ? (<><p className='text256'>No Blogs Fond</p>
    </>
    ):(creates.map
    ((create)=><div className='blog-cont' key={create.id}>
     <div className='section1'>
      <p className='title'>{create.tittle}</p>
     </div>
     <div className='section2'>
      <p><img src={create.image} alt=""/>
      {create.blog}
      </p>
     </div>
     <div className='section3'>
      <p>Posted on-{date}</p>
      <p className='ms-2'>Posted by-{create.writername}</p>
     </div>
    </div> 
    ))}
    </>
  )
}

export default Read
