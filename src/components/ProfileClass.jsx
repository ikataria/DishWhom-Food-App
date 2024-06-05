import { Component } from "react";

import ProfileUserClass from "./ProfileUserClass";
import ProfileRepoClass from "./ProfileRepoClass";

import { GITHUB_USER_URL } from "../utils/constants";
import { GITHUB_USERNAME } from "../utils/constants";
import ProfileUserClass from "./ProfileUserClass";

class Profile extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");

    this.state = {
      userData: {
        name: "John Doe",
        location: "Unknown location",
      },
    };
  }

  async componentDidMount() {
    console.log("Parent Component Did Mount");
    const userObj = await fetch(GITHUB_USER_URL + GITHUB_USERNAME);
    const userInfo = await userObj.json();

    this.setState({
      userData: userInfo,
    });
  }

  componentDidUpdate() {
    console.log("Parent Component Did Update");
  }

  componentWillUnmount() {
    console.log("Parent Component Will Unmount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <p>This is Profile Class</p>
        <ProfileUserClass userData={this.state.userData} />
        <ProfileRepoClass userData={this.state.userData} />
      </div>
    );
  }
}

export default Profile;

// ---Below is console.log for each lifecycle method
// Parent Constructor
// Parent Render
// 1st Child Constructor: Profile User
// 1st Child Render: Profile User
// 2nd Child Constructor: Profile Repo
// 2nd Child Render: Profile Repo
// 1st Child Component Did Mount: Profile User
// 2nd Child Component Did Mount: Profile Repo
// Parent Component Did Mount
// Parent Render
// 1st Child Render: Profile User
// 2nd Child Render: Profile Repo
// 1st Child Component Did Update: Profile User
// 2nd Child Component Did Update: Profile Repo
// Parent Component Did Update
// Parent Component Will Unmount
// 1st Child Component Will Unmount: Profile User
// 2nd Child Component Will Unmount: Profile Repo