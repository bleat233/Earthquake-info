import React from "react";

export default function Earthquake({properties}){

    return(<section className="Earthquake">
            <h2>Earthquake: {properties.title}</h2>
            <ul>
        <div>
            <li>Magnitude: {properties.mag}</li>
            <li>Place: {properties.place}</li>
            <li>Gap: {properties.gap}</li>
            </div>
            </ul>
    </section>)}

   
