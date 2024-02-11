import ccbLogo from "../logos/ccbStamp.png";
import "../styles/flipped.css";
import img1 from "../private/images/everestmaya-tudor.png";
import img2 from "../private/images/kieran malik.png";

interface cardProps{
    userName:string;
    code:string,
}

export default function FlippedCard(prop:cardProps){ 
  let map = new Map<string, string>([
    ['0000', img1],
    ['1111', img2]
  ])

  const imgFound = map.get(prop.code);

  return(
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={ccbLogo} style={{width:"4.5vw", float:"right"}}></img>
              <p style={{textAlign:"left"}}>Your Valentine's Day Goody Gram <br></br> from your CCBae or CCBestie</p>
              
              <div></div>
              <h3>Hello, {prop.userName}</h3>
              <h4 style={{textAlign:"center"}}>♥ Hover anywhere on the envelope to view your Digital Goody Gram ♥</h4>
        </div>
        <div className="flip-card-back">
          <img className="goodygram" src={imgFound}></img>
        </div>
      </div>
    </div>

  )
}