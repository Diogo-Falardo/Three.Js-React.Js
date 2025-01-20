function ButtonClick(){

    // let count = 0;
    // const handleClick = (name) => {
    //     if (count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count}`);
    //     }else{
    //         console.log(`${name} stop clicking me`);
    //     }
    // };

    const handleClick = (e) => e.target.textContent = "OUCH!";

    // const handleClick2 = (name) => console.log(`${name} stop clicking `);

    return(
        // <button onClick={() => handleClick2("Diogo")}>Click Me :/</button>
        <button onDoubleClick={(e) => handleClick(e)}>Click Me :/</button>
    );

}
export default ButtonClick