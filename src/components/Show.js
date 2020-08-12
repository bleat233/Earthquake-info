import React from "react";
import Earthquake from "./Earthquake";


function Show({earthquake}){
    return(
      
        <article>
          <div style={{color:"white", textAlign: "center",height:"60px"}}>
        <header>
          <h1>Earthquake info</h1>
        </header>
        </div>
    <div className="earthquake" style={{background: "rgba(256,256,256,0.5)", width:"50%", display: "table-cell", verticalAlign: "middle"}}>
        {earthquake.map((arr2,i)=>(
            <Earthquake key={i}           
                properties = {arr2.properties}/>
                ))}
        
    </div>
    </article>
    );
}

export default Show;