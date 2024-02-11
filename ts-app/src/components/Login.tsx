import { useState } from "react";
import {contact_map} from "../private/data";
import "../styles/envelope.css";
import { ControlledInput } from "./ControlledInput";
import ccbLogo from "../logos/ccbStamp.png";
import FlippedCard from "./FlippedCard";

export default function Login(){
    const [email, setEmail] = useState<string>("");
    const [code, setCode] = useState("");
    const [name, setName] = useState<string>("");
    const [data, setData] = useState<string[]>([""]);

    const [showEmailInput, setShowEmail] = useState<boolean>(true);
    const [showCodeInput, setShowCode] = useState<boolean>(false);

    function verifyEmail(){
        if(contact_map.has(email)){
            setShowCode(true);
            setShowEmail(false);
            let arr:string[] = contact_map.get(email) as string[];
            setData(arr)
            setName(arr[1])
        }
        else{
            alert('Please enter a valid Brown email!');
            setEmail("");
            setShowEmail(true);
        }
    }

    function verifyCode(){
        var correctCode = data[0];
        if(correctCode == code){
            setShowCode(false); 
        }
        else{
            alert('Please enter the 4-digit code from your email.');
            setCode("");
            setShowCode(true);
        }
    }

    return(
        <div className="container">
            <div className="envelope">
                {showEmailInput ? 
                    <div>
                        <img src={ccbLogo} style={{width:"4.5vw", float:"right"}}></img>
                        <p>Your Valentine's Day Goody Gram <br></br> from your CCBae or CCBestie</p>
                        <ControlledInput
                            value={email}
                            setValue={setEmail}
                            ariaLabel={"your email input box"}
                            labelText={"Enter your Brown email..."}
                        ></ControlledInput>
                        <button id="submit" onClick={() => verifyEmail()}>Enter</button>
                    </div> 
                    : null}
                {showCodeInput ? 
                <div>
                    <img src={ccbLogo} style={{width:"4.5vw", float:"right"}}></img>
                    <p>Your Valentine's Day Goody Gram <br></br> from your CCBae or CCBestie</p>
                    
                    <h3>Hello, {name}</h3>
                    <ControlledInput
                        value={code}
                        setValue={setCode}
                        ariaLabel={"your code input box"}
                        labelText={"Enter your code..."}
                    ></ControlledInput>
                    <button id="submit" onClick={() => verifyCode()}>Enter</button>
                </div> : null
                }
                {(!showCodeInput && !showEmailInput) ? <FlippedCard userName={name} code={code}></FlippedCard> : <></>}
            </div>
        </div>
    )
}