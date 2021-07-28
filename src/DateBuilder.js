import React from 'react';


function DateBuilder() {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[new Date().getDay()];
    let date = new Date().getDate();
    let month = months[new Date().getMonth()];
    let year = new Date().getFullYear();

    return <p>{day} {date} {month} {year}</p>;
}

export default DateBuilder;