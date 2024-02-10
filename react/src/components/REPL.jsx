import React, { useState } from "react";
import {data} from "../private/data";

export default function REPL(){
    const [email, setEmail] = useState<String>('');
    const [code, setCode] = useState(0);

    function retrieve_data(email){
        console.log(data);
    }

    retrieve_data("kelly_wei@brown.edu");

    return(
        <div>
            <p>jfl;adjfkl;d</p>
        </div>
    )

}

