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
import img11 from "../private/images/img11.png";
import img12 from "../private/images/img12.png";
import img13 from "../private/images/img13.png";
import img14 from "../private/images/img14.png";
import img15 from "../private/images/img15.png";
import img16 from "../private/images/img16.png";
import img17 from "../private/images/img17.png";
import img18 from "../private/images/img18.png";
import img19 from "../private/images/img19.png";
import img20 from "../private/images/img20.png";
import img21 from "../private/images/img21.png";
import img22 from "../private/images/img22.png";
import img23 from "../private/images/img23.png";
import img24 from "../private/images/img24.png";
import img25 from "../private/images/img25.png";
import img26 from "../private/images/img26.png";
import img27 from "../private/images/img27.png";
import img28 from "../private/images/img28.png";
import img29 from "../private/images/img29.png";
import img30 from "../private/images/img30.png";
import img31 from "../private/images/img31.png";
import img32 from "../private/images/img32.png";
import img33 from "../private/images/img33.png";
import img34 from "../private/images/img34.png";
import img35 from "../private/images/img35.png";
import img36 from "../private/images/img36.png";
import img37 from "../private/images/img37.png";
import img38 from "../private/images/img38.png";
import img39 from "../private/images/img39.png";
import img40 from "../private/images/img40.png";
import img41 from "../private/images/img41.png";
import img42 from "../private/images/img42.png";
import img43 from "../private/images/img43.png";
import img44 from "../private/images/img44.png";
import img45 from "../private/images/img45.png";
import img46 from "../private/images/img46.png";
import img47 from "../private/images/img47.png";
import img48 from "../private/images/img48.png";
import img49 from "../private/images/img49.png";
import img50 from "../private/images/img50.png";
import img51 from "../private/images/img51.png";
import img52 from "../private/images/img52.png";
import img53 from "../private/images/img53.png";
import img54 from "../private/images/img54.png";
import img55 from "../private/images/img55.png";
import img56 from "../private/images/img56.png";
import img57 from "../private/images/img57.png";
import img58 from "../private/images/img58.png";
import img59 from "../private/images/img59.png";
import img60 from "../private/images/img60.png";
import img61 from "../private/images/img61.png";
import img62 from "../private/images/img62.png";
import img63 from "../private/images/img63.png";
import img64 from "../private/images/img64.png";
import img65 from "../private/images/img65.png";
import img66 from "../private/images/img66.png";
import img67 from "../private/images/img67.png";
import img68 from "../private/images/img68.png";
import img69 from "../private/images/img69.png";
import img70 from "../private/images/img70.png";
import img71 from "../private/images/img71.png";
import img72 from "../private/images/img72.png";

import { useState } from "react";

interface cardProps{
    userName:string;
    code:string,
}

export default function FlippedCard(prop:cardProps){ 
  let map = new Map<string, string>([
    ['0000', img0],
    ['2587', img1],
    ['2279', img2],
    ['9377', img3],
    ['8122', img4],
    ['1123', img5],
    ['2461', img6],
    ['9243', img7],
    ['7739', img8],
    ['9303', img9],
    ['9256', img10],
    ['5068', img11],
    ['1205', img12],
    ['5095', img13],
    ['1271', img14],
    ['8318', img15],
    ['1297', img16],
    ['8181', img17],
    ['1516', img18],
    ['6114', img19],
    ['1982', img20],
    ['6880', img21],
    ['3650', img22],
    ['6531', img23],
    ['1102', img24],
    ['7545', img25],
    ['7225', img26],
    ['9295', img27],
    ['9494', img28],
    ['5241', img29],
    ['6219', img30],
    ['2154', img31],
    ['1894', img32],
    ['6413', img33],
    ['7154', img34],
    ['3281', img35],
    ['9499', img36],
    ['3525', img37],
    ['1250', img38],
    ['8717', img39],
    ['9345', img40],
    ['1127', img41],
    ['2821', img42],
    ['7359', img43],
    ['5339', img44],
    ['2617', img45],
    ['6756', img46],
    ['5149', img47],
    ['5718', img48],
    ['5577', img49],
    ['1521', img50],
    ['8654', img51],
    ['2651', img52],
    ['4401', img53],
    ['1478', img54],
    ['1369', img55],
    ['6773', img56],
    ['5159', img57],
    ['9257', img58],
    ['3886', img59],
    ['8183', img60],
    ['1518', img61],
    ['5031', img62],
    ['2744', img63],
    ['4586', img64],
    ['9580', img65],
    ['3677', img66],
    ['7012', img67],
    ['6025', img68],
    ['4418', img69],
    ['8500', img70],
    ['3151', img71],
    ['8209', img72]
  ])

  const imgFound = map.get(prop.code);

  return(
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-back">
            <img src={ccbLogo} style={{width:"4.5vw", float:"right", paddingRight:"8px", paddingTop:"15px"}}></img>
            <p style={{textAlign:"left"}}>Your Valentine's Day Goody Gram <br></br> from your CCBae or CCBestie</p>
            <p><br></br></p>
            <h3>Hello, {prop.userName}!</h3>
            <h4 style={{textAlign:"center"}}>Hover anywhere on the envelope to view your Digital Goody Gram!</h4>
          </div>
          <div className="flip-card-front">
            <img className="goodygram" src={imgFound}></img>
          </div>
        </div>
      </div>
    </div>

  )
}