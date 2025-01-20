import { useState, useEffect } from 'react'
import './App.css'

// Starting With Capital Letter
// Props {strings // ints // etc...}
// const Person = (props) =>{
//   return(
//     <>
//         <h1>Name: {props.name}</h1>
//         <h2>Last Name: {props.lastname}</h2>
//         <h2>Age: {props.age}</h2>
//     </>
//   )
// }

const App = () => {
  const[counter, setCounter] = useState(0);

  useEffect(() => {
    alert('Changed ' + counter);
  }, [counter]);

  return (
    <div className='App'>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>


  )
}

export default App
