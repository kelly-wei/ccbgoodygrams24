import ccbLogo from "../logos/ccbStamp.png";
import "../styles/flipped.css";
import img0 from "../private/images/img0.png";
import img1 from "../private/images/img1.png";
import img2 from "../private/images/img2.png";
import img3 from "../private/images/img3.png";
import img4 from "../private/images/img4.png";
import img5 from "../private/images/img5.png";
import img6 from "../private/images/img6.png";
import img7 from "../private/images/img7.png";
import img8 from "../private/images/img8.png";
import img9 from "../private/images/img9.png";
import img10 from "../private/images/img10.png";

interface cardProps{
    userName:string;
    code:string,
}

export default function FlippedCard(prop:cardProps){ 
  let map = new Map<string, string>([
    ['0000', img0],
  ])

  const imgFound = map.get(prop.code);

  return(
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={ccbLogo} style={{width:"4.5vw", float:"right", paddingRight:"8px", paddingTop:"15px"}}></img>
              <p style={{textAlign:"left"}}>Your Valentine's Day Goody Gram <br></br> from your CCBae or CCBestie</p>
              
              <h3>Hello, {prop.userName}</h3>
              <h4 style={{textAlign:"center"}}>Hover anywhere on the envelope to view your Digital Goody Gram!</h4>
        </div>
        <div className="flip-card-back">
          <img className="goodygram" src={imgFound}></img>
        </div>
      </div>
    </div>

  )
}