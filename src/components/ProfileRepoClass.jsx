import { Component } from "react";

class ProfileRepoClass extends Component{
    constructor(props){
        super(props)
        console.log("2nd Child Constructor: Profile Repo");

        // console.log(this.props.userData);
    }

    componentDidMount(){
        console.log("2nd Child Component Did Mount: Profile Repo");
    }

    componentDidUpdate(){
        console.log("2nd Child Component Did Update: Profile Repo");
    }

    componentWillUnmount(){
        console.log("2nd Child Component Will Unmount: Profile Repo");
    }

    render(){
        console.log("2nd Child Render: Profile Repo");

        const { name } = this.props.userData;

        return(
            <div>
            <h4>This is repo component :{name}</h4>
        </div>
        )
    }
}

export default ProfileRepoClass;