// ReadOnly Props

import PropTypes from 'prop-types'

function Student(props){
length

    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStundent ? "yes" : "No"}</p>
        </div>
    );
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStundent: PropTypes.bool,
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStundent: false,
}
export default Student