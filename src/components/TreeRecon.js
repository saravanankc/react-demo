import React from "react"



function TreeRecon() {
    return (
        // <div className="grayBox" style={{border: "1px solid gray"}}>
        <div className="grayBox">
            <div>TreeRecon component label</div>
            <input style={{width:'50%'}} placeholder='this input type is REACT component and CAN be edited as DOM is NOT overwritten!'/>
            <pre>{
                (new Date()).toLocaleTimeString()
            }</pre>
        </div>
    );
}

export default TreeRecon;