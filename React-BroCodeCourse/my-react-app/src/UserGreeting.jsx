import PropTypes from 'prop-types'
function UserGreeting(props){
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please log in to continue</h2>
    // }

    const WelcomeMSG = <h2 className="green">Welcome {props.username}</h2>;
    const notLog = <h2 className="red"> Please log in to continue u just a {props.username}</h2>;

    return(props.isLoggedIn ?  WelcomeMSG : notLog);
    
}
UserGreeting.prototype = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting