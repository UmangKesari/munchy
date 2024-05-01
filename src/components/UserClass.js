import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo:{
                name: "default",
                location: "default",
                avatar_url: "default"
            }
        }; 

        console.log("Child constructor");
    }

    async componentDidMount() {
        //console.log("child component component did mount");
        //Make API call here
        const data = await fetch("https://api.github.com/users/umangKesari");

        const json = await data.json();

        this.setState({
            userInfo: json
        });

        console.log(json);

    }

    componentDidUpdate() {
        console.log("Component Did mount");
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }

    render() {
        console.log("Child render");
        //const {name, location} = this.props
        
        const {login, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>Name: {login} (class)</h2>
                <h3>Location : {location}</h3> 
            </div>
        );
    }
}

export default UserClass;