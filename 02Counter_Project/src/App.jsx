// import { useState } from 'react'
// import './App.css'

// function App() {
//   let [count , setcount] = useState(99);

//  // let value = 55;
//   function addvalue(){
    
//     // setcount(count+1);
//     // setcount(count+1);
//     // setcount(count+1);
//     // setcount(count+1); // this will not work as expected due to closure and the fiber function nature of setState in React.

//     setcount(prevCounter => prevCounter+1);
//     setcount(prevCounter => prevCounter+1);
//     setcount(prevCounter => prevCounter+1);
//     setcount(prevCounter => prevCounter+1); // This will work as expected because it uses the previous state value to calculate the new state.
    
//   }

//   function subvalue(){
//     if(count == 0){
//       setcount(0);
//     }
//     else{
//       count = count-1;
//       setcount(count);
//       console.log("Decrement", count);
//     }
//   }

//   return (
//     <>
//       <h1>Counter</h1>
//       <h2>Counter value : {count}</h2>
//       <button id="btn" onClick={addvalue}>Increment : {count}</button>
//       <br/> <br />
//       <button id="btn" onClick={subvalue} >Decrement : {count}</button>
//     </>
//   )
// }

// export default App


import {useState} from 'react'
import './App.css'


function App(){
  let[count,setCount] = useState(0);

  // make the function for the increament the button

   function addValue(){
    // setCount(count+1);
    setCount(prevCounter => (prevCounter+1)) // most correct for the production
   }

   // decreament value
   function decValue(){
    //  if(count == 0) {
    //   setCount(0)
    //  }
    //  else{
    //    count = count -1;
    //    setCount(count)
    //  }

     count = count -1;
       setCount(count)
   }

   // return it now

   return(
     <>
       <h1> Counter </h1>
       <button type='Button' onClick={addValue}> Increment: {count}</button>
       <br /><br />
       <button type='Button' onClick={decValue}> Increment: {count}</button>
     </>
   )
}

export default App;