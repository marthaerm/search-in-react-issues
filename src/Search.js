import React, { Component } from "react";

class Search extends Component{
    constructor() {
        super()
        this.state = {
            isLoaded: false,
            issues: [],
            issuesFound: []
        };
    }
   
    findWord(){
        let { issues, issuesFound } = this.state;
        let word = this.getTitle.value;
        issuesFound = [];
        issues.map(function (issue) {
            if(issue.title.includes(word))
                issuesFound.push(issue);
        })
        console.log(issuesFound);
    }
    
    componentDidMount(){
        fetch("https://api.github.com/repos/facebook/react/issues")
            .then(response => response.json())
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
        const { isLoaded, issues, issuesFound } = this.state;
        if(!isLoaded)
            return (<div>loading..</div>) 
        else
            return(
                <div>
                    <input type="text" ref={(input) => (this.getTitle = input)}/>
                    <button onClick={(e) => this.findWord()}>Search</button>
                    
                    {
                        issuesFound.map(function (issue) {
                            return(
                            <p>{issue.title}</p>
                            )
                            //console.log(issue.title);
                        })
                    }
                </div>
            );  
    }
}

export default Search;