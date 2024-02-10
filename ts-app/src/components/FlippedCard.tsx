import ccbLogo from "../logos/ccbStamp.png";
import "../styles/flipped.css"

interface cardProps{
    userName:string;
    src:string
}

export default function FlippedCard(prop:cardProps){
    console.log(prop.userName);
    console.log(prop.src);
    
    return(
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={ccbLogo} style={{width:"4.5vw", float:"right"}}></img>
                <p style={{textAlign:"left"}}>Your Valentine's Day Goody Gram <br></br> from your CCBae or CCBestie</p>
                
                <h3>Hello, {prop.userName}</h3>
                <h4 style={{textAlign:"center"}}>♥ Hover anywhere on the envelope to view your Digital Goody Gram ♥</h4>
          </div>
          <div className="flip-card-back">
            <img className="goodygram" src={require(prop.src)}></img>
          </div>
        </div>
      </div>

    )
}