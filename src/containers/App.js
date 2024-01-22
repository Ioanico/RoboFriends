import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
// import { render } from "@testing-library/react";
import "./app.css";
import { robots } from "../robots";
import Scroll from "../components/Scroll";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: "",
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json();
            })
            .then((users) => {
                this.setState({ robots: users });
            });
        console.log("Mount");
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    };

    render() {
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name
                .toLowerCase()
                .includes(this.state.searchfield.toLowerCase());
        });
        if (!robots.length) {
            return <h1>Loading</h1>;
        } else {
            return (
                <div className="tc">
                    <h1 className="f2">ROBOFRIENDS</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;
