import PropTypes, { array } from 'prop-types'

function List(props){
    // const fruit = [{id: 1, name:"apple", calories: 250}, 
    //     {id: 2,name: "banana", calories: 45}, 
    //     {id: 3,name: "Pera", calories: 35}];

    // fruit.sort((a,b) => a.name.localeCompare(b.name)); // ALFABETICAL
    // fruit.sort((a,b) => a.name.localeCompare(a.name)); // REVERSE ALFABETICAL
    // fruit.sort((a,b) => a.calories - b.calories);

    // const lowcalfruit = fruit.filter(fruit => fruit.calories < 100);


    // Fica Reutilizavel
    // Reusable
    const category = props.category;
    const itemList = props.items;
    
    const listItems = itemList.map(item => <li key={item.id} >{item.name + " " + item.calories}</li>);


    return(
    <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
    </>
    );

}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number})),
}
List.defaultProps = {
    category: "Category: Default",
    items: [],
    
}

export default List