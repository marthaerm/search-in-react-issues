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
        let { issues } = this.state;
        let word = this.getTitle.value.toLowerCase();
        let results = [];
        issues.map(function (issue) {
            if(issue.title.toLowerCase().includes(word))
            results.push(issue);
        });
        this.setState (state => {
            const issuesFound = (results);
            return {
                issuesFound
            }
        });
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
        let { isLoaded, issues, issuesFound } = this.state;
        if(!isLoaded)
            return (<div>loading..</div>) 
        else
            return(
                <div>
                    <input type="text" ref={(input) => (this.getTitle = input)}/>
                    <button onClick={(e) => this.findWord()}>Search</button>
                    <p>{!issuesFound ? issuesFound[0].title : ""}</p>
                    {issuesFound.map(function (issue) {
                            return(
                                <p key={issue.id}>{issue.title}</p>
                            )
                        })}
                        
                </div>
            );  
    }
}

export default Search;