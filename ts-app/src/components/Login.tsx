import { useState } from "react";
import {email_code} from "../private/data";
import { name_email } from "../private/data";
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
        if(name_email.has(email)){
            setShowCode(true);
            setShowEmail(false);
            setName(name_email.get(email) as string)
            // let arr:string[] = name_email.get(email) as string[];
            // setData(arr)
            // setName(arr[1])
        }
        else{
            alert('Please enter a valid Brown email!');
            setEmail("");
            setShowEmail(true);
        }
    }

    function verifyCode(){
        var codeArr:string[] = email_code.get(email) as string[]
        if(codeArr.includes(code)){
            setShowCode(false); 
        }
        // var correctCode = data[0];
        // if(correctCode == code){
        // }
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
                        <div className="header">
                            <img src={ccbLogo} style={{width:"4.5vw", float:"right"}}></img>
                            <p>Your Valentine's Day Goody Gram <br></br> from your CCBae or CCBestie</p>
                        </div>
                        <div className="submission">
                            <h3></h3>
                            <ControlledInput
                                value={email.toLowerCase()}
                                setValue={setEmail}
                                ariaLabel={"your email input box"}
                                labelText={"Enter your Brown email..."}
                            ></ControlledInput>
                            <button id="submit" onClick={() => verifyEmail()}>Enter</button>
                        </div>
                    </div> 
                    : null}
                {showCodeInput ? 
                <div>
                    <div className="header">
                    <img src={ccbLogo} style={{width:"4.5vw", float:"right"}}></img>
                    <p>Your Valentine's Day Goody Gram <br></br> from your CCBae or CCBestie</p>
                    </div>
                    <div className="submission">
                        <h3>Hello, {name}</h3>
                        <ControlledInput
                            value={code}
                            setValue={setCode}
                            ariaLabel={"your code input box"}
                            labelText={"Enter your code..."}
                        ></ControlledInput>
                        <button id="submit" onClick={() => verifyCode()}>Enter</button>
                    </div>
                </div> : null
                }
                {(!showCodeInput && !showEmailInput) ? <FlippedCard userName={name} code={code}></FlippedCard> : <></>}
            </div>
        </div>
    )
}