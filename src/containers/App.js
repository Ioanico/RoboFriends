import React, { Component } from "react";
import "./App.css";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import { robots } from "../robots";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

const state = {
    robots: [],
    searchfield: "",
};

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
            .then((Response) => {
                return Response.json();
            })
            .then((users) => {
                this.setState({ robots: users });
            });
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
        // (...) ca sa afiseze ce scriem in search box
        // de aia si target.value
    };
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return !robots.length ? (
            <h1>loading</h1>
        ) : (
            <div className="tc">
                <h1>Robo Friends</h1>
                {/* searchChange is a prop, is the onSearchChange function */}
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default App;
