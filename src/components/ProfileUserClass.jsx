import { Component } from "react";

class ProfileUserClass extends Component{
    constructor(props){
        super(props)
        console.log("1st Child Constructor: Profile User");

        // console.log(this.props.userData)
    }

    componentDidMount(){
        console.log("1st Child Component Did Mount: Profile User");
    }

    componentDidUpdate(){
        console.log("1st Child Component Did Update: Profile User");
    }

    componentWillUnmount(){
        console.log("1st Child Component Will Unmount: Profile User");
    }

    render(){
        console.log("1st Child Render: Profile User");

        const { avatar_url, name, location } = this.props.userData;

        return(
            <div>
            <img src={avatar_url} alt="Dev_Pic" />
            <h4>Name: {name}</h4>
            <h4>Location: {location}</h4>
        </div>
        )
    }

}

export default ProfileUserClass;