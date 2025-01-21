import React, {useState} from "react"

function MyComponent(){

    // const [name, setName] = useState("Guest");
    // const [age, setAge] = useState(0)
    // const [isEmployed, setIsEmployed] = useState(false);

    // const updateName = () =>{
    //     setName("Diogo");
    // }

    // const IncrementAge = () =>{
    //     setAge(age + 1000000000000);
    // }

    // const toogleEmployedStatus = () => {
    //     setIsEmployed(!isEmployed);
    // }

    // return(
    //     <div>
    //         <p>Name: {name}</p>
    //         <button onClick={updateName}>SetName</button>

    //         <p>Age: {age}</p>
    //         <button onClick={IncrementAge}>Increment Age</button>

    //         <p>Is Employed: {isEmployed ? "yes" : "no"}</p>
    //         <button onClick={toogleEmployedStatus}>Toogle Status</button>
    //     </div>
    // );

    const [name, setName] = useState("");
    const [quantity,setqunt] = useState(0);
    const [Comment,setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(event){
        setName(event.target.value);

    }

    function handleQuant(event){
        setqunt(event.target.value);

    }

    function handleComent(event){
        setComment(event.target.value);

    }

    
    function handlepaymentChange(event){
        setPayment(event.target.value);

    }

    function handleshipping(event){
        setShipping(event.target.value);

    }

    // const [car, setcar] = useState({year:2010,make:"audi",model:"tesla"});

    // function handleyear(event){
    //     setcar(c => ({...c, year: event.target.value}));
    // }

    // function handlemake(event){
    //     setcar(c => ({...c, make: event.target.value}));
    // }

    // function handlmodel(event){
    //     setcar(c => ({...c, model: event.target.value}));
    // }

    const [car, setcar] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");


    function addcar(){
        const newCar = {year: carYear, make: carMake, model: carModel};
        setcar(c => [...car, newCar]);

        setCarYear(new Date.getFullYear());
        setCarMake("0");
        setCarModel("0")
    }

    function removecar(index){
        setcar(c => c.filter((e, i) => i !== index));
    }

    function yearchange(event){
        setCarYear(event.target.value);
    }

    function Makechange(event){
        setCarMake(event.target.value);
    }

    function Modelchange(event){
        setCarModel(event.target.value);
    }

    return(
        // <div>
        //     <input value={name} onChange={handleNameChange}></input>
        //     <p>
        //         Name: {name}
        //     </p>

        //     <input value={quantity} onChange={handleQuant} type="number">
        //     </input>
        //     <p>
        //         Quant: {quantity}
        //     </p>

        //     <textarea value={Comment} onChange={handleComent} placeholder="Enter Somenthing"/>
        //     <p>
        //         Comment: {Comment}
        //     </p>

        //     <select value={payment} onChange={handlepaymentChange}>
        //         <option value="">Select an option</option>
        //         <option value="Visa">Visa</option>
        //         <option value="Mastercard">Mastercard</option>
        //         <option value="GiftCard">Gift-Card</option>
        //     </select>
        //     <p>Payment: {payment}</p>

        //     <label>
        //         <input type="radio" value="pickup" checked={shipping === "pickup"} onChange={handleshipping}/>
        //         Pick Up
        //     </label>
            
        //     <label>
        //         <  input type="radio" value="delivery" checked={shipping === "delivery"} onChange={handleshipping}/>
        //         Delivery
        //     </label>

        //     <p>Shipping Method: {shipping}</p>
        // </div>
        <>
            {/* <div>
                <p>Car: {car.year} {car.model} {car.make}</p>
            </div>
            <input type="number" value={car.year} onChange={handleyear}/>
            <input type="text" value={car.model} onChange={handlmodel}/>
            <input type="text" value={car.make} onChange={handlemake}/> */}

            <div>
                <h2>List of car Objects</h2>
                <ul>
                    {car.map((cars, index) =>
                        <li key={index} onClick={() => removecar(index)}>
                             {cars.year}  " "
                             {cars.make}  " "
                             {cars.model}  " "
                        </li>
                    )}
                </ul>
                <input type="number" value={carYear} onChange={yearchange}/>
                <input type="text" value={carMake} onChange={Makechange} placeholder="enter car make"/>
                <input type="text" value={carModel} onChange={Modelchange} placeholder="enter car model"/>
                <button onClick={addcar}>Add car</button>
                
            </div>

        </>
    );

}

export default MyComponent