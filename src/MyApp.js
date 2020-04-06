// Reference playground code :
// https://jscomplete.com/playground/rgs1.6

import React, { useState } from "react"

function Button(props){
    // step 1 refactoring 
    // const [counter, setCounter] = useState(1);
    // const onClickHandler = () => setCounter(counter+1);
    // return <button onClick={props.onClickFunction}>{counter}</button>
    
    // step 2 refactoring 
    // return <button onClick={props.onClickFunction}>+{props.incrementValue}</button>
    
    //step 2 refactoring
    const onClickHandler = () =>  props.onClickFunction(props.incrementValue);
    return (
        <button onClick={onClickHandler}>
            +{props.incrementValue}
        </button>
        );
}

function DisplayLabel(props){
    return (
        <label>
            Hit count is {props.message}
        </label>
    );
}

function MyApp(){
    const [counter, setCounter] = useState(0);
    const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
    
    // const onClickHandler = (incrementValue) => setCounter(counter+incrementValue);

    
    return (
    <div>
        <Button onClickFunction={incrementCounter} incrementValue={1}></Button>
        <Button onClickFunction={incrementCounter} incrementValue={5}></Button>
        <Button onClickFunction={incrementCounter} incrementValue={10}></Button>
        <Button onClickFunction={incrementCounter} incrementValue={20}></Button>
        <br/>
        <DisplayLabel message={counter}></DisplayLabel>
    </div>
    );
}

export default MyApp;