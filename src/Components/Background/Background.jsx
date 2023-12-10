import "../Background/Background.css"
import Navbar from "../Playlist/Navbar/Navbar"
import Player from "../Playlist/Audioplayer/player";



const Background =()=>{




  

    return(

        <div className="BOX">

<div className="Box">
<Navbar/>

<div className="totalanimation">

<div  className="animation"  >
    <span id="animation11" ></span>
    <span id="animation12" ></span>
    <span id="animation13" ></span>
    <span id="animation14" ></span>
    <span id="animation15" ></span>

  </div>
 
  </div>



<Player  />
</div>

        </div>
    );
}

export default Background;