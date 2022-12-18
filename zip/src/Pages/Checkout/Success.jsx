import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Success.css"



const Success = () => {

    const [loading,setLoading]=useState(true);

    localStorage.clear("cartArray");
  

    useEffect(()=>
    {
      setTimeout(()=>
      {
       setLoading(false)
      },5000)
        
    },[])

    

  if(loading){

    return <div id="loadingdiv">
            <img src="https://cdn.discordapp.com/attachments/707486765136740384/1013180271715160144/loading-gif.gif" width={300} alt=""/>
          <h2>Proccessing</h2>
    </div>
   
  }
  else

  {
  
  return (
    <>
       
      
       <div className="container">
        <p id="orderPlaced">Your order has been placed!</p>
        <p id='txt'>An email confirmation has been sent to your registered email address</p>
        
       <Link to="/"> <button className='btn'>Continue Shopping</button></Link> 
        </div> 
    </>
  )}


  
}

export default Success