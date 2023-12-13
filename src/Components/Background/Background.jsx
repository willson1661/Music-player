import "../Background/Background.css"
import Navbar from "../Playlist/Navbar/Navbar"

import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import Songs from "../Playlist/Audioplayer/Songs";

const Background = () =>{


// const [open1,setClose]=useState(false);



   
  
    // const handleClick1=()=>{
    //     setClose(!open1);
    // }
  

    return(

        <div className="BOX">

<div className="Box">
<Navbar/>



  <div>
  
      
   
{/* <div onClick={handleClick1}>
<div className="er1" >

{showPlaylist}

{open1 ? <FiX /> : <FiMenu />}
</div>

</div> */}

     
  
      <Player
      Autoplay
           trackList={Songs}
           includeTags={false}
           includeSearch={false}
           showPlaylist={true}
           autoPlayNextTrack={true}

      />
  
    </div>


</div>

        </div>
    );
}

export default Background;