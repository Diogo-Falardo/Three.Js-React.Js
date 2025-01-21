import React, {useState, useEffect} from "react"

function UseEffecttry(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color])

    function addcount(){
        setCount(c => c + 1);
    }

    function subcount(){
        setCount(c => c - 1);
    }

    function changecolor(){
        setColor(c => c === "green" ? "red" : "green")
    }

    return(
        <>
        <p style={{color: color}}>
            Count: {count}
        </p>
        <button onClick={addcount}>
            add
        </button>
        <button onClick={subcount}>
            sub
        </button>
        <button onClick={changecolor}>
            change
        </button>
        </>
    );

}

export default UseEffecttry