import React, {useState} from "react";
import "./style.css"


const Mail =({setOverlayVisible, setSelectedImage})=>{

    const closeOverlay = () => {
        setSelectedImage(null);
        setOverlayVisible(false);
    
      };



    return(
        <div className="overlay"  onClick={closeOverlay}>
             <div className="mail">
                <h1>Magalivictoria000@gmail.com</h1>
           
        </div>

        </div>
       
    )
}

export default Mail;