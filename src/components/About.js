import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

// const About = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <h3>Welcome to Munchy</h3>
//             <User name={"umang"}></User>
//             <UserClass name={"Umang"} location={"Noida"}></UserClass>
//         </div>
//     );
// };

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("parent component component did mount");
}

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About Us</h1>
        <h3>Welcome to Munchy</h3>

        {/* Demo for using context API in class based component */}
        <UserContext.Consumer>
          {({loggedInUser}) => <h4 className="text-blue-600">{loggedInUser} context API</h4>}
        </UserContext.Consumer>

        <User name={"umang"}></User>
        <UserClass name={"Umang"} location={"Noida"}></UserClass>
      </div>
    );
  }
}

export default About;
