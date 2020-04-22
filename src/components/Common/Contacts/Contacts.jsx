import React from "react";

const Contacts = ({contacts}) => {
    let options = [];
    for (let prop in contacts) {
        if (contacts[prop]) {
            options.push(<option key={prop}>{contacts[prop]}</option>)
        }
    }
    return (
        options.length > 0
            ? <select>{options}</select>
            : <p>no info</p>
    )
};

export default Contacts;