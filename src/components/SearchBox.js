import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input
                className=" pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="Search Robots"
                // everytime onChange is trigger, it calls searchChange in App.js
                //asa comunicam intre componente prin componenta parinte
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;
