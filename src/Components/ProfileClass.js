import React from "react";

class Profile extends React.Component{
    constructor(props){
    super(props);
    this.state={
        name:"Dummy Name",
        location:"Dummy Location",
    };
    console.log("child--constructor");

    }
    async componentDidMount(){

    //    this.timer= setInterval(()=>{
    //         console.log("setInterval");
    //     },1000);
        // //API Calls
        // const data= await fetch("https://api.github.com/users/erro-rr");
        // const json= await data.json();
        // console.log(json);
        // this.setState({
        //     userInfo:json,
        // })



        console.log("ComponentDidMount")
    }
    componentDidUpdate(){
        console.log("component DidUpdate");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        // console.log("componentWillUnmount");
    }

    render(){
        console.log("render");
        const count=this.state
        return (
            <div>
            <h2>Profile class Components</h2>
            <img src={this.state.userInfo?.avatar_url} />
            <h3>Name: {this.state.userInfo?.name}</h3>
            <h3>Location: {this.state.userInfo?.location}</h3>
            {/* <h3>Count:{count}</h3> */}
            {/* We can not mutate state directly
            Never like: this.state=something */}
            {/* <button onClick={()=>{
                this.setState({
                    count:1,
                    count2:1,
                })
            }}>SetCount</button> */}
        </div>
        )
    }
}

export default Profile;