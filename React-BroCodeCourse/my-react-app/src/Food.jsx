import { useState } from "react";

function Food(){

    const food1 = "Maça";
    const food2 = "Pera";


    const [foods, setFoods] = useState(["Apple", "orange" , "banana"])

    function add(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value= "";

        setFoods(f =>[...f, newFood])
    }

    function remove(index){

        setFoods(foods.filter((_, i) => i !== index));

    }

    return(
        // <ul>
        //     <li>Banana</li>
        //     <li>{food1}</li>
        //     <li>{food2.toUpperCase()}</li>
        // </ul>
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((foods, index) => <li key={index}
                onClick={() => remove(index)}>{foods}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter Food name"></input>
            <button onClick={add}>Add food</button>
        </div>
    );
}

export default Food