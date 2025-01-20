function Food(){

    const food1 = "Maça";
    const food2 = "Pera";

    return(
        <ul>
            <li>Banana</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>

    );
}

export default Food