import React, {useState} from "react"

function ColorPicker(){
    const[color, setcolor] = useState("#FFFFFF")

    function handlecolorchange(event){
        setcolor(event.target.value)
    }

    return(
        <div className="color-picker">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>
                    Selected Color {color}
                </p>
                <label>Select a Color</label>
                <input type="color" value={color} onChange={handlecolorchange}/>
            </div>
        </div>
    );

}

export default ColorPicker