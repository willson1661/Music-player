import Songs from "./Songs";

import "./player.css"

//  import { Card} from "react-bootstrap";
const SongsProduct =()=>{

//  function play() {
//     new Audio(ambientclassicalguitar).play();
//   }

  







    return(

        <div className="SongsProduct">
  
            <div>
            <div className="flex">
          
        {Songs.map((data,key=0) => (
             
          <div className="card_total">
            <div className="track "   >
          
              <img  className="track-img" src={data.img} alt='qd' 
              style={{width:"82px" , 
              borderRadius:"20px",
              height:"62px",
              objectFit:"cover"}} />
              <div className="track-discr">
               <span class="track-name">{data.title}</span>
               <span class="track-author">{data.artistname}</span>
     
              </div>
              <span className="track-duration">{data.duration}</span>
            </div>
          </div>
              
        ))}
     
      </div>


      
                
            </div>
        </div>
    );

}

export default SongsProduct;