import { useState } from "react";
import {email_code} from "../private/data";
import { name_email } from "../private/data";
import "../styles/envelope.css";
import ccbLogo from "../logos/ccbStamp.png";
import FlippedCard from "./FlippedCard";

export default function Login(){
    const [email, setEmail] = useState<string>("");
    const [code, setCode] = useState("");
    const [name, setName] = useState<string>("");

    const [showEmailInput, setShowEmail] = useState<boolean>(true);
    const [showCodeInput, setShowCode] = useState<boolean>(false);

    function verifyEmail(){
        if(name_email.has(email)){
            setShowCode(true);
            setShowEmail(false);
            setName(name_email.get(email) as string)
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
                            <input 
                                type="text" 
                                id="email-input"
                                value={email.toLowerCase()}
                                onChange={(ev) => setEmail(ev.target.value)}
                                placeholder={"Enter your Brown email..."}
                                style={{width:"30vw", alignItems:"center"}}
                                onKeyDown={(key) => 
                                    {
                                        if(key.code == "Enter"){
                                            verifyEmail()}
                                        }
                                    }
                            ></input>
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
                        <input 
                                type="text" 
                                id="code-input"
                                value={code.toLowerCase()}
                                onChange={(ev) => setCode(ev.target.value)}
                                placeholder={"Enter your code"}
                                style={{width:"9vw", alignContent:"center", alignItems:"center"}}
                                onKeyDown={(key) => 
                                    {
                                        if(key.code == "Enter"){
                                            verifyCode()}
                                        }
                                    }
                        ></input>                        
                        <button id="submit-code" onClick={() => verifyCode()}>Enter</button>
                    </div>
                </div> : null
                }
                {(!showCodeInput && !showEmailInput) ? <FlippedCard userName={name} code={code}></FlippedCard> : <></>}
            </div>
        </div>
    )
}