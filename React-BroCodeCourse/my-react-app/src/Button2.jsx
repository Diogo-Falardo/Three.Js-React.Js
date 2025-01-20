
// Inline CSS STYLING
// Good to isolate componentes with low style
function Button2(){

    const styles = {
        backgroundcolor: "#242424",
        color: "#FFF",
        padding: "10px 20px",
        borderradius: "10px",
        border: "none",
        cursor: "pointer"
    
    }


    return(
        <button style={styles}>
            Click Me
        </button>
    );

}

export default Button2;