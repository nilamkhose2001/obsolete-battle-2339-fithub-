import logo from './logo.svg';
import './App.css';
import Store from './Pages/Cart/Store/Store';
import Checkout from './Pages/Checkout/Checkout';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import Success from './Pages/Checkout/Success';
import Cart from './Pages/Cart/Cart'
function App() {

 
  return (
    <div className="App" >

    <Cart/>

  <Store/>
  {/* <Checkout/> */}


{/* <Success/> */}



      
    </div>
  );
}

export default App;



// const h = (e) => {
//   sdiv(e)

//   localStorage.setItem("us",JSON.stringify(user));

// }
// const [user , SetUser] = useState({

// Name:"",
// age: "",
// skfjd: ""
// }
// );

// const {Name,age,address,prine} = user;

// const onInputChange=e =>{
// SetUser({...user, [e.target.name]: e.target.value});
// }


// const userr = JSON.parse(localStorage.getItem("us"));
// console.log(userr)


// {div === 1 ? <div > Satyam 1 
//   <input value={Name}  name="Name" onChange={e=>onInputChange(e)}/>
  
//   <button onClick={() => h(2)} > show </button> </div> : <div  > <p>{userr.Name}</p>
   
//      </div>}