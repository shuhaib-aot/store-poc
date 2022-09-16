import React from "react";
import {test} from '@jest/globals';
import {render} from './test-utils'

import App from "../App"

test("Sould render the App component without breaking",()=>{
    render(<App />)
});