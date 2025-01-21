import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Button2 from './Button2.jsx'
import Students from './Students.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import ButtonClick from './ButtonClick.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './counter.jsx'
import ColorPicker from './ColorPicker.jsx'
import TodoList from './TodoList.jsx'
import UseEffecttry from './useEffecttry.jsx'

function App() {
  // const fruit = [{id: 1, name:"apple", calories: 250}, 
  //   {id: 2,name: "banana", calories: 45}, 
  //   {id: 3,name: "Pera", calories: 35}];

  // const Vegetables= [{id: 4, name:"batata", calories: 250}, 
  //   {id: 5,name: "broculo", calories: 45}, 
  //   {id: 6,name: "sla", calories: 35}];
  

  return(
    // Fragmento
    // <> 
    //     <Header/>
    //     <Food/>
    //     <Footer/>
    //     <Card/>
    // <Button/>
    // <Button2/>
    // </>
    // <>
    //   <Students name="Diogo" age={20} isStundent={true}/>
    //   <Students name="Patrick" age={42} isStundent={false}/>
    //   <Students name="Squidward" age={52} isStundent={false}/>
    //   <Students />
    // </>
    // <>
    //   <UserGreeting isLoggedIn={true} />
    // </>


    // <>    
    //   {/* {fruit.length > 0 ? <List items={fruit} category="Fruits"/> : null}
    //   {Vegetables.length > 0 ? <List items={Vegetables} category="Vegetais"/> : null} */}

    //     {/* Do the same but with less code*/}

    //   {fruit.length > 0 && <List items={fruit}  category="Fruits"/>}
    //   {Vegetables.length > 0 && <List items={Vegetables} category="Vegetais"/>}
    
    // </>

    // <>
    // <ButtonClick/>
    // <ProfilePicture/>
    // </>

    // <>
    // <MyComponent/>
    // <Counter/>
    // </>
    <>
    {/* <Food/>
    <MyComponent/>
    <TodoList/>
    <useEffecttry/> */}
    <UseEffecttry/>
    </>
  )
}
export default App
