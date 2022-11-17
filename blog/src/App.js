import React from "react";
import {  BrowserRouter, Routes, Route} from "react-router-dom";
import Create from './Crud/Create';
import Read from './Crud/Read';
import Update from './Crud/Update';

const App =()=>{
    return(
        <>
         <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Create/>}/>
                <Route exact path="/read" element={<Read/>}/>
                <Route exact path="/create" element={<Create/>}/>
                <Route exact path="/update/:id" element={<Update/>}/> 
            </Routes>
         </BrowserRouter> 
        </>
    )
}
export default App;