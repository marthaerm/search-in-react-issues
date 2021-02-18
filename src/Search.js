
import React, { Component } from "react";



class Search extends Component{
    constructor() {
        super()
        this.state = {
            isLoaded: false,
            issues: []
        };
    }


    componentDidMount(){
        fetch("https://api.github.com/repos/facebook/react/issues")
            .then(response => response.json())
           // .then(issues => console.log(issues))
            .then(
                (issues) => {
                    this.setState({
                        isLoaded: true,
                        issues: issues
                    });
                }
            )
    }
    

    render() {
        const { isLoaded, issues } = this.state;
        if(!isLoaded)
            return (<div>loading..</div>) 
        else
            return(
                <div>
                    <input type="text" />
                    <p>{issues[0].title}</p>
                    {console.log(issues)}
                </div>
            );  
    }
}

export default Search;