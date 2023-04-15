import React, { Component } from "react";



function Sp(props) {
    return (
        <div className='App'>
            <img src={props.linkanh}></img>
            <h1>{props.tieude}</h1>
            <h2>150.000</h2>
        </div>
    );
}




export default Sp;
