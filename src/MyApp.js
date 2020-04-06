// Reference playground code :
// https://jscomplete.com/playground/rgs1.6

import React, { useState } from "react"
import ButtonCounter from "./components/ButtonCounter"
import TreeRecon from "./components/TreeRecon"
import MountNode from "./components/MountNode"
import { render } from "@testing-library/react";



function MyApp(){
    return (
        <div>
            <MountNode></MountNode>
            <ButtonCounter></ButtonCounter>
            <TreeRecon></TreeRecon>
        </div>
    );
}

export default MyApp;