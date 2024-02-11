import React, {useState} from "react";
import "./style.css"


const Mail =({setOverlayVisible, setSelectedImage})=>{

    const closeOverlay = () => {
        setSelectedImage(null);
        setOverlayVisible(false);
    
      };



    return(
        <div className="overlay">
             <div className="mail">
                <button className="btn-mail" onClick={closeOverlay}>X</button>
                <h1>Magalivictoria85068@gmail.com</h1>
           
        </div>

        </div>
       
    )
}

export default Mail;